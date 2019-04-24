---
title: My First Post
excerpt: 一个时间旅行例子
date: 2019-03-23
tags:
  - react
  - demo
author: yidafu
status: draft
---

时间旅行的实现思路基本可以分为两种：命令式和快照式。[这里](https://zhuanlan.zhihu.com/p/43743782)对着两种方式做了非常解释。

命令式的核心点在于`Record`对象，它用于描述了变动。每次变动发生就产生一个实现了`IRecord`接口的对象,并推入保存历史的栈中。

那如何选择合适的`IRecord`接口来描述变动呢？

两个例子：

```ts
interface IRecord {
  undo: () => void;
  redo: () => void;
}
// or
interface IRecord {
  action: string;
  mutation: Mutation;
}
```

第一中接口声明来自[前面提到的那片文章](https://zhuanlan.zhihu.com/p/43743782)，这种申明可以使得调用`redo``undo`变得很简答。

```ts
class TimeTravel {
  undoStack = []
  redoStack = []

  undo () {
    const record = this.undoStack.pop();
    record.undo();
  }

  redo () {
    const record = this.redoStack.pop();
    record.redo();
  }
}
```

这种做法通过增加变更产生处的复杂度，来简化后续历史回退的职责。

如果你的应用中引入了`redux`,`vuex`,`MobX`这样的状态库，你可能会想在`store`里面来完成所有操作。

参考：

+ [https://zhuanlan.zhihu.com/p/43743782](https://zhuanlan.zhihu.com/p/43743782)