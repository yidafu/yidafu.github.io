
---
title: x-tree-diff-plus-algorithm
excerpt: void
date: 2020-06-08
tags:
  - algorithm
  - X-Tree Diff+
author: Dov Yih
status: draft
---

# X-Tree Diff+ 算法

关于树的比较，大多数人了解的就是 MVVM 框架（例如： React）里提出 Diff 算法，时间复杂度可达到O(n)。但这也是基于特定假设限制性很大的优化，对于像 XML 文档的版本控制等其他场景并不适合。

树的比较本身是一个时间复杂度为 O(n<sup>3</sup>) 的算法，有许多关于树的比较的研究已经将时间复杂度降到 O(nlog<sub>n</sub>)，O(m*n)，O(n+m)。

下面介绍的 X-Tree Diff+ 算法的时间复杂度就到达的 O(m+n)。