---
title: hexo CI工具切换，从travis.ci到Github Actions
date: 2023-05-05 18:33:56
tags:
- Notes
- Github
- Hexo
---

很久没有改博客了，今天更新了一下简历，结果travis.ci罢工了。
说是我的credit不够，搜了一下，有人说是它们的bug，也有report说，它不再免费支持了。
随手就搜了一下[替代品](https://earthly.dev/blog/migrating-from-travis/)，一眼相中原生的Github Actions。它看起来简单又直接，搜了一下教程。
按照[Sanonz - 利用 Github Actions 自动部署 Hexo 博客](https://sanonz.github.io/2020/deploy-a-hexo-blog-from-github-actions/)配置了一下，基本可用。只是在`hexo deploy`那步遇到了一些permission的问题，解决方法是：
1. 在`_config.yml`中把`repo`值从`http`改为`ssh`地址，加上hexo-deployer-git 依赖包
2. 按照[sma11black/hexo-action](https://github.com/sma11black/hexo-action#step-1-setup-deploy-keys-and-secrets)的提示，把public key加入到目标repo的deploy key中

顺便阅读了一下[sma11black/hexo-action](https://github.com/sma11black/hexo-action#step-1-setup-deploy-keys-and-secrets)里的其他建议：
* 把CNAME加在了resource文件之下，这样就不用每次提交的时候在script里面加啦
* 把`29esther.github.io`改为private repo可以隐藏原文件啦，不过这一步，需要多加一个PSA，步骤在[这里](https://github.com/actions/checkout#Checkout-multiple-repos-private)

一切就正常工作啦。可以把travis config删掉啦。
想要关掉travis的账号，结果发现travis.ci用户删除必须[发邮件给他们](https://travis-ci.community/t/account-removal/13164)，只是太low了，懒得麻烦，账号就留着吧，从github这头，能删的删删吧。

