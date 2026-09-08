# 学习资料发布说明

大安装包、压缩包、项目视频不要放进 `public/`，也不要提交到 GitHub。

本机保存位置：

```text
local-resources/  安装包、PDF、手册、压缩包
local-media/      原始项目视频
```

这两个目录已被 Git 忽略，不会上传到 GitHub，也不会被 Cloudflare Pages 打包部署。

## 发布安装包与手册

1. 将资料上传至学校网盘、百度网盘、阿里云盘、腾讯微云或 Cloudflare R2。
2. 创建分享链接，并按平台要求设置访问密码或权限。
3. 打开 `src/data/siteData.js`，在对应主题的 `links` 里添加链接：

```js
{ label: 'Dev-C++ 安装包', url: 'https://你的网盘分享链接' },
{ label: 'STM32F103 参考手册', url: 'https://你的网盘分享链接' },
```

网页会将它作为“打开资料”按钮，在新标签页打开网盘页面。

## 发布项目视频

上传视频到 B 站、腾讯视频或对象存储后，在对应成果的 `video` 项中填写外链：

```js
video: {
  src: 'https://你的视频外链',
  poster: '/images/qsfm.jpg',
  label: '项目演示视频',
},
```

注意：不是所有视频网站的分享页都能直接嵌入 `<video>` 播放。若平台只提供观看页面，请将成果页改为跳转按钮，或使用可公开访问的 MP4 文件链接。

## 小文件例外

仅当单个 PDF 等资料较小，并且确认不会超过 GitHub、Cloudflare Pages 的文件限制时，才可以放进 `public/resources/`，再使用：

```js
{ label: '小型 PDF 手册', url: '/resources/filename.pdf', download: true },
```
