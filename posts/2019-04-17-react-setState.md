---
title: 分析 React setState 原理 
excerpt: 本文是 React 阅读的第一篇，主要以 React `setState` 方法为主线一探 React 的声明周期函数。
date: "2019-04-17"
tags: 
  - react
author: yidafu
status: draft
---

# 分析 React setState 原理

本文是 React 阅读的第一篇，主要以 React `setState` 方法为主线一探 React 的声明周期函数。更多参考在[这里](#ref)

了解过 React 对`setState`肯定不会陌生。

```jsx
// 函数签名
setState(updater[, callback])
```


参考<a href="#ref">&nbsp;</a>
+ https://juejin.im/post/5a155f906fb9a045284622b4
+ https://juejin.im/post/5ac1aaad6fb9a028d444bb87
+ https://juejin.im/post/5ac1aaad6fb9a028d444bb87