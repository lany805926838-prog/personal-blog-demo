---
title: 项目记录：SOYAL FAQ 知识库清洗脚本
description: 用 Python 和 Codex 辅助清洗 SOYAL FAQ，把原始问答筛选、分类、去噪，并整理成适合 Dify 上传的 Markdown 知识库。
date: 2026-06-02
tags:
  - 知识库
  - RAG
  - Python
  - 自动化
cover: /uploads/ChatGPT Image 2026年5月17日 11_43_43.png
draft: false
---

这个项目是为了配合 SOYAL 产品资料 AI 助手做的。做知识库问答时，我发现如果 FAQ 原始资料太杂，AI 很容易检索到没用的内容，回答就会变得不稳定。

所以我写了一个 Python 脚本，用来清洗和整理 SOYAL FAQ。

## 我做了什么

我先分析 FAQ 里的内容，把对问答有用的条目筛出来，比如 701ServerSQL、701ClientSQL、数据库模式、软件安装、防火墙、API 集成、通知、QRCode 门禁等相关问题。

然后我用脚本给 FAQ 记录做分类和打分。价值高的内容会被保留下来，低价值内容会被过滤掉，比如测试标题、太短的回答、网页导航信息、和产品助手关系不大的页面。

整理后，每条 FAQ 会输出成 Markdown 格式，并保留标题、分类、回答内容、常见问法和来源链接。这样上传到 Dify 后，知识库结构更清楚，也更方便后面排查回答问题。

## 用到的工具

- Python：编写 FAQ 筛选、分类和 Markdown 输出脚本。
- Codex：辅助设计脚本逻辑和调整规则。
- Markdown：作为 Dify 知识库上传格式。
- Dify：用于后续知识库检索和问答测试。

## 项目结果

最后生成了适合 Dify 使用的 FAQ 知识库文件，减少了原始资料里的噪声，也让 FAQ 内容更容易维护。

这个项目让我理解到，RAG 项目不只是上传文档，前面的资料清洗和分类同样重要。
