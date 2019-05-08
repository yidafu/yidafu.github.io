---
title: 数字表示成千位分隔形式的几种解法
excerpt: 回字的四种写法问题
date: 2019-03-23
tags:
  - javascript
  - algorithm
author: yidafu
status: draft
---

## 问题描述

给定第一个数字将其转换成千分位分隔的形式。如:`1234567890` => `1,234,567,890`。

## 思路

解题的基本思路很简单：

### 思路一

1. 找出给定数字开头（数字长度）不能被`3`整除的高位。比如上面例子的`1`。又比如，`12345`开头的`12`
+ 对于剩下的部分按每三个数字一组分组
+ 最后在将1、2步得到的分组用`,`连接起来

### 思路二

显然的我们意识到如果**正向**地去遍历数字字符串，需要去判断字符串长度是否能被`3`整除。那**反向**遍历呢？是的，如果这样做就不用判断*字符串长度是否能被`3`整除*。

+ 反向遍历字符串，以3个数字为一组
+ 将得到的分组用`,`连接起来

## 思路一--遍历求解

按照上面的思路实现的代码。没有什么值得解释的点。

```js
function () {
  if (money === '' ) return '';
  // 多出的最高位
  const len = money.length;
  const extra = len % 3;
  const strBuffer = []; // array 拼接字符串效率更高

  if ( extra > 0 ) { // 非整齐最高位
    strBuffer.push( money.substring( 0, extra ) );
  }

  for ( let i = extra; i < len; i += 3 ) {
    strBuffer.push( money.substring( i, i + 3 ) );
  }

  // strBuffer should be [1, 293, 213]
  return strBuffer.join(',');
}
```

## 思路一--借助正则

实现`for`遍历能够解决问题，但还有更骚气的写法吗？有，使用正则。不过稍稍有些特殊，将使用到`regexpInstance.lastIndex`属性。参见：[mdn: RegExp/lastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)。

代码上面的类似，关键部分不同。

```js
// ...
const regexp = /\d{3}/g;

// ...

regexp.lastIndex = extra;

let matchStr;
while( ( matchStr = regexp.exec( numStr ) ) !== null ) {
  strBuffer.push( matchStr[0] )
}

return strBuffer.join( ',' );
// ..
```

这里借助了正则表达式的一个特性：

每次匹配总是从`lastIndex`指定的索引开始匹配。可以借此来跳过多出来的最高位，是的与`/\d{3}/g`匹配的子串长度始终是`3`的倍数。

>  lastIndex is set to the next position following the most recent match.

每次匹配成功以后，`lastIndex`将被设置为匹配成功的字符串的下一个索引。在循环里，每次匹配`3`个数字，直到匹配完成。

## 思路二--反向遍历

```js
function (money) {
 if (money === '' ) return '';

 const strBuffer = []; // array 拼接字符串效率更高

 for ( let i = money.length; i > 0; i -= 3 ) {
   strBuffer.unshift( money.substring( i - 3, i) );
 }

 return strBuffer.join(',');
}
```

看起来确实简洁不少。

这里还有个小知识点不知道读者你发现了没？

```js
strBuffer.unshift( money.substring( i - 3, i) );
```

这里并没有去判断`i - 3`是否大于`0`。实际上存在`i - 3 < 0`的情况。

> Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length respectively. Any argument value that is NaN is treated as if it were 0.

`String.substring()`函数的**所有负数参数将被当成 0 对待**，大于字符串长度的参数将变为字符串长度。`NaN`也会被当成`0`对待。

这个行为和`String.substr()`不同。第一个参数为负数，即表示倒数的索引。第二个参数为负数将被当成`0`对待。如果使用得是`String.substr()`就需要多去判断`i - 3`是否小于 `0`，并特殊处理。

```js
let start;
let length = 3;
for ( let i = money.length; i > 0; i -= 3 ) {
  if( ( start = i - 3 ) < 0 ) {
    start = 0;
    length = i;
  }
  strBuffer.unshift( money.substr( start, length ) );
}
```

## 思路二--正则解法

这是所有解法里面代码最少，但也是需要最多正则知识的解法。

```js
function (money) {
  return money.replace(/(?=(\B\d{3})+$)/g, ',');
  // return money.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
}
```

## 一行代码解法

```js
// 真一行解法 (^_^)
function (money) {
  return money.split('').reverse().join('').split(/(\d{3})/g).filter(Boolean).map(substr => substr.split('').reverse().join('')).reverse().join(',');
}
```

咳咳，格式化一下：

```js
function (money) {
  return money.split('').reverse().join('') // 字符串倒序
    .split(/(\d{3})/g) // 分隔成 3个数字一组
    .filter(Boolean) // 过滤空串
    .map( // 分组字符串正序
      substr => substr.split('').reverse().join('')
    )
    .reverse().join(','); // 分组正序
}
```

## 总结

<!-- 解决问题的方法并不唯一 -->

[String/substring#Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#Description)

[String/substr#Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr#Description)

[TONGZl: 把一串数字表示成千位分隔形式——JS正则表达式的应用](https://juejin.im/post/5abb5b01f265da237f1e5a92)
