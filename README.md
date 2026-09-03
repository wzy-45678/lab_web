# 创新创业实验室招新官网

使用 Vue 3、Vite、Vue Router 与 SCSS 构建的纯前端静态网站。项目固定为暗黑主题，包含七个路由页面、响应式导航、滚动显现和柔和的页面切换动画。

## 初始化命令

从空目录重新创建同类项目时可执行：

```powershell
npm create vite@latest lab-website -- --template vue
cd lab-website
npm install
npm install vue-router@4 sass lucide-vue-next
```

当前项目已经完成初始化，只需要安装依赖：

```powershell
npm install
```

## 本地开发

```powershell
npm run dev
```

默认访问地址通常为 `http://localhost:5173/`。

## 打包与预览

```powershell
npm run build
npm run preview
```

生产文件生成在 `dist/` 目录。

## Cloudflare Pages 部署

将项目推送到 GitHub 后，在 Cloudflare Pages 中连接仓库并填写：

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Production branch: main
```

`public/_redirects` 会在构建时复制到 `dist/`，确保直接访问 Vue Router 子页面时不会出现 404。

## 目录结构

```text
lab-website/
├─ public/
│  ├─ images/                 # 实验室和项目图片
│  ├─ _redirects              # Cloudflare Pages 单页路由规则
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ AppHeader.vue        # 固定导航与移动菜单
│  │  ├─ AppFooter.vue        # 公共页脚
│  │  ├─ PageHero.vue         # 内页首屏
│  │  └─ SectionHeading.vue   # 区块标题
│  ├─ data/
│  │  └─ siteData.js          # 方向、项目、荣誉等集中数据
│  ├─ directives/
│  │  └─ reveal.js            # 滚动渐进显现
│  ├─ router/
│  │  └─ index.js             # 七个路由配置
│  ├─ styles/
│  │  ├─ _variables.scss      # 色彩、尺寸和动画变量
│  │  ├─ _mixins.scss         # 容器、卡片等复用样式
│  │  └─ global.scss          # 全局暗黑主题样式
│  ├─ views/
│  │  ├─ HomeView.vue
│  │  ├─ ResearchView.vue
│  │  ├─ CompetitionsView.vue
│  │  ├─ HonorsView.vue
│  │  ├─ WorksView.vue
│  │  ├─ LearningView.vue
│  │  └─ JoinView.vue
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
└─ vite.config.js
```

## 内容替换

- 通用数据集中在 `src/data/siteData.js`。
- 图片统一放在 `public/images/`，正式上线前应替换为实验室真实照片。
- 地址、邮箱、QQ群号和二维码目前是演示内容，需要在发布前补充。
- 招新表单仅做前端交互演示，不保存或提交个人信息。

## 演示图片来源

首版使用 Unsplash 工程类照片进行布局验证。正式官网应使用实验室实拍图，并确认校徽、教师照片和获奖证书的发布授权。
