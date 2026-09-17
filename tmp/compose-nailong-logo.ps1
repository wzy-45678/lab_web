param(
  [Parameter(Mandatory = $true)][string]$TargetPath,
  [Parameter(Mandatory = $true)][string]$LogoPath,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

$source = @'
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class NaturalLogoComposite
{
    private struct Pt
    {
        public double X;
        public double Y;
        public Pt(double x, double y) { X = x; Y = y; }
    }

    private static bool InPolygon(double x, double y, Pt[] polygon)
    {
        bool inside = false;
        for (int i = 0, j = polygon.Length - 1; i < polygon.Length; j = i++)
        {
            bool crosses = ((polygon[i].Y > y) != (polygon[j].Y > y)) &&
                (x < (polygon[j].X - polygon[i].X) * (y - polygon[i].Y) /
                (polygon[j].Y - polygon[i].Y + 0.000001) + polygon[i].X);
            if (crosses) inside = !inside;
        }
        return inside;
    }

    private static byte Clamp(double value)
    {
        if (value < 0) return 0;
        if (value > 255) return 255;
        return (byte)Math.Round(value);
    }

    private static double SmoothStep(double edge0, double edge1, double x)
    {
        double t = Math.Max(0.0, Math.Min(1.0, (x - edge0) / (edge1 - edge0)));
        return t * t * (3.0 - 2.0 * t);
    }

    public static void Process(string targetPath, string logoPath, string outputPath)
    {
        using (Bitmap targetInput = new Bitmap(targetPath))
        using (Bitmap logoInput = new Bitmap(logoPath))
        using (Bitmap target = new Bitmap(targetInput.Width, targetInput.Height, PixelFormat.Format32bppArgb))
        using (Bitmap logo = new Bitmap(logoInput.Width, logoInput.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(target))
            {
                g.DrawImage(targetInput, 0, 0, target.Width, target.Height);
            }
            using (Graphics g = Graphics.FromImage(logo))
            {
                g.DrawImage(logoInput, 0, 0, logo.Width, logo.Height);
            }

            Rectangle targetRect = new Rectangle(0, 0, target.Width, target.Height);
            Rectangle logoRect = new Rectangle(0, 0, logo.Width, logo.Height);
            BitmapData targetData = target.LockBits(targetRect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            BitmapData logoData = logo.LockBits(logoRect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);

            int targetBytes = Math.Abs(targetData.Stride) * target.Height;
            int logoBytes = Math.Abs(logoData.Stride) * logo.Height;
            byte[] original = new byte[targetBytes];
            byte[] result = new byte[targetBytes];
            byte[] logoPixels = new byte[logoBytes];
            Marshal.Copy(targetData.Scan0, original, 0, targetBytes);
            Buffer.BlockCopy(original, 0, result, 0, targetBytes);
            Marshal.Copy(logoData.Scan0, logoPixels, 0, logoBytes);

            // Placement tuned to the supplied 1087 x 1447 artwork.
            double scaleX = target.Width / 1087.0;
            double scaleY = target.Height / 1447.0;
            double centerX = 674.0 * scaleX;
            double centerY = 790.0 * scaleY;
            double radiusX = 180.0 * scaleX;
            double radiusY = 205.0 * scaleY;
            double eraseRadiusX = 202.0 * scaleX;
            double eraseRadiusY = 228.0 * scaleY;
            double curveDenominator = Math.Asin(0.94);

            int minX = Math.Max(0, (int)Math.Floor(centerX - eraseRadiusX - 2));
            int maxX = Math.Min(target.Width - 1, (int)Math.Ceiling(centerX + eraseRadiusX + 2));
            int minY = Math.Max(0, (int)Math.Floor(centerY - eraseRadiusY - 2));
            int maxY = Math.Min(target.Height - 1, (int)Math.Ceiling(centerY + eraseRadiusY + 2));

            // Rebuild the belly with a harmonic fill grown from the surrounding body pixels.
            int fillWidth = maxX - minX + 1;
            int fillHeight = maxY - minY + 1;
            int fillCount = fillWidth * fillHeight;
            double[] fillB = new double[fillCount];
            double[] fillG = new double[fillCount];
            double[] fillR = new double[fillCount];
            bool[] solvePixel = new bool[fillCount];
            double boundaryB = 0.0, boundaryG = 0.0, boundaryR = 0.0;
            int boundaryCount = 0;

            for (int y = minY; y <= maxY; y++)
            {
                for (int x = minX; x <= maxX; x++)
                {
                    double u = (x - centerX) / eraseRadiusX;
                    double v = (y - centerY) / eraseRadiusY;
                    double radial = Math.Sqrt(u * u + v * v);
                    int localIndex = (y - minY) * fillWidth + (x - minX);
                    int targetIndex = y * targetData.Stride + x * 4;
                    fillB[localIndex] = original[targetIndex];
                    fillG[localIndex] = original[targetIndex + 1];
                    fillR[localIndex] = original[targetIndex + 2];
                    if (radial < 0.94) solvePixel[localIndex] = true;

                    if (radial >= 0.94 && radial <= 1.0)
                    {
                        int maxChannel = Math.Max(original[targetIndex + 2], Math.Max(original[targetIndex + 1], original[targetIndex]));
                        int minChannel = Math.Min(original[targetIndex + 2], Math.Min(original[targetIndex + 1], original[targetIndex]));
                        double ringLum = 0.2126 * original[targetIndex + 2] + 0.7152 * original[targetIndex + 1] + 0.0722 * original[targetIndex];
                        if (ringLum > 95 && maxChannel - minChannel < 88)
                        {
                            boundaryB += original[targetIndex];
                            boundaryG += original[targetIndex + 1];
                            boundaryR += original[targetIndex + 2];
                            boundaryCount++;
                        }
                    }
                }
            }

            if (boundaryCount == 0) boundaryCount = 1;
            boundaryB /= boundaryCount;
            boundaryG /= boundaryCount;
            boundaryR /= boundaryCount;
            for (int i = 0; i < fillCount; i++)
            {
                if (!solvePixel[i]) continue;
                fillB[i] = boundaryB;
                fillG[i] = boundaryG;
                fillR[i] = boundaryR;
            }

            for (int iteration = 0; iteration < 720; iteration++)
            {
                for (int localY = 1; localY < fillHeight - 1; localY++)
                {
                    int row = localY * fillWidth;
                    for (int localX = 1; localX < fillWidth - 1; localX++)
                    {
                        int i = row + localX;
                        if (!solvePixel[i]) continue;
                        fillB[i] = (fillB[i - 1] + fillB[i + 1] + fillB[i - fillWidth] + fillB[i + fillWidth]) * 0.25;
                        fillG[i] = (fillG[i - 1] + fillG[i + 1] + fillG[i - fillWidth] + fillG[i + fillWidth]) * 0.25;
                        fillR[i] = (fillR[i - 1] + fillR[i + 1] + fillR[i - fillWidth] + fillR[i + fillWidth]) * 0.25;
                    }
                }
            }

            for (int y = minY; y <= maxY; y++)
            {
                for (int x = minX; x <= maxX; x++)
                {
                    double u = (x - centerX) / eraseRadiusX;
                    double v = (y - centerY) / eraseRadiusY;
                    double radial = Math.Sqrt(u * u + v * v);
                    if (radial >= 0.98) continue;
                    double eraseAlpha = 1.0 - SmoothStep(0.91, 0.98, radial);
                    int localIndex = (y - minY) * fillWidth + (x - minX);
                    int targetIndex = y * targetData.Stride + x * 4;
                    result[targetIndex] = Clamp(result[targetIndex] * (1.0 - eraseAlpha) + fillB[localIndex] * eraseAlpha);
                    result[targetIndex + 1] = Clamp(result[targetIndex + 1] * (1.0 - eraseAlpha) + fillG[localIndex] * eraseAlpha);
                    result[targetIndex + 2] = Clamp(result[targetIndex + 2] * (1.0 - eraseAlpha) + fillR[localIndex] * eraseAlpha);
                    result[targetIndex + 3] = 255;
                }
            }

            // Add only the colored ink from the new mark; its white paper background stays transparent.
            for (int y = minY; y <= maxY; y++)
            {
                for (int x = minX; x <= maxX; x++)
                {
                    double u = (x - centerX) / radiusX;
                    double v = (y - centerY) / radiusY;
                    double radial = Math.Sqrt(u * u + v * v);
                    if (radial > 1.0) continue;

                    // Cylindrical horizontal warp makes the print follow the rounded belly.
                    double sourceU = Math.Asin(Math.Max(-0.94, Math.Min(0.94, u * 0.94))) / curveDenominator;
                    double sourceV = v + 0.022 * (1.0 - u * u) * (v + 0.15);
                    sourceV = Math.Max(-1.0, Math.Min(1.0, sourceV));

                    int sourceX = (int)Math.Round((sourceU + 1.0) * 0.5 * (logo.Width - 1));
                    int sourceY = (int)Math.Round((sourceV + 1.0) * 0.5 * (logo.Height - 1));
                    int sourceIndex = sourceY * logoData.Stride + sourceX * 4;
                    int targetIndex = y * targetData.Stride + x * 4;

                    double sourceB = logoPixels[sourceIndex];
                    double sourceG = logoPixels[sourceIndex + 1];
                    double sourceR = logoPixels[sourceIndex + 2];
                    double distanceFromWhite = Math.Sqrt(
                        (255.0 - sourceR) * (255.0 - sourceR) +
                        (255.0 - sourceG) * (255.0 - sourceG) +
                        (255.0 - sourceB) * (255.0 - sourceB));
                    double inkAlpha = SmoothStep(16.0, 62.0, distanceFromWhite);
                    double edgeAlpha = 1.0 - SmoothStep(0.988, 1.0, radial);
                    double alpha = inkAlpha * edgeAlpha * 0.94;
                    if (alpha <= 0.001) continue;

                    double shade = 0.965 - 0.030 * u - 0.025 * v - 0.018 * radial * radial;
                    shade += 0.025 * Math.Exp(-((u + 0.28) * (u + 0.28) + (v + 0.38) * (v + 0.38)) / 0.22);
                    shade = Math.Max(0.89, Math.Min(1.035, shade));

                    double logoB = sourceB * shade * 1.01;
                    double logoG = sourceG * shade * 0.99;
                    double logoR = sourceR * shade * 0.97;

                    result[targetIndex] = Clamp(result[targetIndex] * (1.0 - alpha) + logoB * alpha);
                    result[targetIndex + 1] = Clamp(result[targetIndex + 1] * (1.0 - alpha) + logoG * alpha);
                    result[targetIndex + 2] = Clamp(result[targetIndex + 2] * (1.0 - alpha) + logoR * alpha);
                    result[targetIndex + 3] = 255;
                }
            }

            Pt[] leftArm = new Pt[] {
                new Pt(250, 625), new Pt(305, 685), new Pt(370, 745), new Pt(445, 795),
                new Pt(520, 830), new Pt(590, 846), new Pt(646, 875), new Pt(664, 930),
                new Pt(640, 990), new Pt(575, 1008), new Pt(515, 970), new Pt(450, 930),
                new Pt(375, 885), new Pt(315, 830), new Pt(270, 760)
            };
            Pt[] rightArm = new Pt[] {
                new Pt(905, 625), new Pt(925, 690), new Pt(915, 755), new Pt(880, 815),
                new Pt(835, 860), new Pt(795, 890), new Pt(770, 945), new Pt(735, 995),
                new Pt(690, 1004), new Pt(658, 954), new Pt(669, 892), new Pt(715, 858),
                new Pt(765, 825), new Pt(815, 775), new Pt(860, 705)
            };

            for (int y = minY; y <= maxY; y++)
            {
                for (int x = minX; x <= maxX; x++)
                {
                    double baseX = x / scaleX;
                    double baseY = y / scaleY;
                    if (!InPolygon(baseX, baseY, leftArm) && !InPolygon(baseX, baseY, rightArm)) continue;

                    int index = y * targetData.Stride + x * 4;
                    int b = original[index];
                    int g = original[index + 1];
                    int r = original[index + 2];
                    bool oldBlueInk = b - r > 48 && b - g > 13 && b > 78;
                    bool oldOrangeInk = r - b > 42 && r - g > 10;
                    double foregroundAlpha = (!oldBlueInk && !oldOrangeInk) ? 1.0 : 0.0;

                    if (foregroundAlpha > 0.0)
                    {
                        result[index] = Clamp(result[index] * (1.0 - foregroundAlpha) + b * foregroundAlpha);
                        result[index + 1] = Clamp(result[index + 1] * (1.0 - foregroundAlpha) + g * foregroundAlpha);
                        result[index + 2] = Clamp(result[index + 2] * (1.0 - foregroundAlpha) + r * foregroundAlpha);
                    }
                }
            }

            Marshal.Copy(result, 0, targetData.Scan0, targetBytes);
            target.UnlockBits(targetData);
            logo.UnlockBits(logoData);

            Directory.CreateDirectory(Path.GetDirectoryName(outputPath));
            target.Save(outputPath, ImageFormat.Png);
        }
    }
}
'@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing
[NaturalLogoComposite]::Process($TargetPath, $LogoPath, $OutputPath)
