# Personal Blog Demo

一个适合先部署到 Cloudflare Pages 的个人博客 demo。当前版本是静态站点，支持首页、关于页、文章列表、文章详情和一个本地编辑器演示页。

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

## 编辑器演示

访问：

```txt
/admin
```

当前编辑器只把内容保存在浏览器 localStorage，用来演示后台体验。它不会出现在公开首页和导航里，但直接访问 `/admin` 仍然可以打开。正式版本应该加入登录权限，并把保存逻辑换成数据库和图片上传接口。

编辑器里的正文区域支持：

```txt
打字
标题
加粗
列表
把图片插入到正文中间
```

现在的插图会以浏览器本地预览方式保存。正式版本应该先把图片上传到图片存储服务，再把图片 URL 插入正文。

## Cloudflare Pages 部署

Cloudflare Pages 构建配置：

```txt
Build command: npm run build
Build output directory: dist
```

域名建议接入 Cloudflare DNS，然后在 Pages 项目里绑定自定义域名。
