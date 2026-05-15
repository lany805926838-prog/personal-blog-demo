# Personal Blog Demo

一个适合部署到 Cloudflare 的个人博客 demo。当前版本是静态站点，支持首页、关于页、文章列表、文章详情，以及一个基于 Sveltia CMS 的免费后台。

## 本地运行

```bash
npm install
npm run dev
```

访问：

```txt
http://127.0.0.1:4321
```

## 写文章

文章放在：

```txt
src/content/posts/
```

新增一个 Markdown 文件即可，例如：

```md
---
title: "文章标题"
description: "文章简介"
date: 2026-05-15
tags: ["学习笔记"]
cover: "https://example.com/cover.jpg"
videoUrl: "https://www.bilibili.com/"
---

正文内容。
```

视频建议只保存 B 站或 YouTube 链接。图片后续可以接 Cloudinary、Supabase Storage 或对象存储。

## 免费发布流程

当前后台使用 Sveltia CMS。它会把文章和个人资料保存到 GitHub，Cloudflare 检测到 GitHub 更新后自动重新部署：

```txt
后台编辑文章/上传图片
        -> 提交 commit
        -> Cloudflare 自动构建
        -> 线上博客更新
```

## 后台管理

访问：

```txt
/admin
```

后台可以管理：

```txt
文章标题
文章简介
文章标签
文章封面
正文内容
正文插图
视频链接
个人资料
头像
联系方式
```

第一次使用后台时，需要登录 GitHub，并授权后台向这个仓库提交内容。后台发布后，本质上是在 GitHub 里生成一次 commit。

### 新增文章

进入 `/admin` 后，选择 `文章`，点击新建。填写标题、简介、日期、标签、封面图和正文，然后发布。

### 上传图片

后台里的图片会保存到：

```txt
public/uploads/
```

文章正文里可以通过编辑器插入图片。文章封面图使用后台里的 `封面图` 字段。

如果你想手动管理，也可以直接在 GitHub 里编辑 `src/content/posts/` 和 `public/uploads/`。

## 替换 demo 图片

当前 demo 里的图片大多是远程示例图。你可以按用途替换：

```txt
src/data/profile.ts
```

这里的 `avatar` 是首页和关于页的个人头像。

```txt
src/content/posts/*.md
```

每篇文章 frontmatter 里的 `cover` 是文章封面图，会显示在文章列表卡片和文章详情顶部。

正式上线时更推荐把图片上传到 Cloudinary、Supabase Storage、Cloudflare R2、阿里云 OSS 或腾讯云 COS，然后把返回的图片 URL 填到 `avatar` 或 `cover` 里。

## Cloudflare Pages 部署

Cloudflare Pages 构建配置：

```txt
Build command: npm run build
Build output directory: dist
```

域名建议接入 Cloudflare DNS，然后在 Pages 项目里绑定自定义域名。
