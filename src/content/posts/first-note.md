---
title: "把个人博客先上线，而不是先做复杂系统"
description: "这个 demo 记录了一个低成本个人博客的起步方案：域名、Cloudflare Pages、图片存储和视频外链。"
date: 2026-05-15
tags: ["建站", "Cloudflare", "个人知识库"]
cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80"
videoUrl: "https://www.bilibili.com/"
---

个人博客最重要的不是一开始就拥有完整后台，而是能持续写、能被访问、维护成本低。

这个阶段可以先把文章放在 Markdown 文件里，图片放到专门的图片服务，视频用 B 站或 YouTube 链接。这样部署成本几乎只有域名费用，也不需要维护服务器。

## 当前策略

- 网站部署到 Cloudflare Pages。
- 域名使用 `.com`，DNS 托管到 Cloudflare。
- 图片后续接 Cloudinary 或 Supabase Storage。
- 视频只保存外链，不让博客服务器承担视频流量。

## 后续再升级

如果以后需要真实后台、登录、评论或数据库，再把编辑器接到 Supabase、Payload 或 Strapi。
