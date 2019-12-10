
---
title: react-hooks-execution-model
excerpt: hooks 的执行时机
date: 2019-12-10
tags:
  - react
author: Dov Yih
status: draft
---

# React Hooks 执行时机

## 例子

假设有下面这样一个简单应用：一个 paper 列表，以及一些对 paper 的操作（目前只有删除）。

```jsx
// function createDeletButton(callback) {
//   return <button onClick={callback}>delete</button>
// }

function PaperItem(props) {
  const { renderAction, data } = props;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.descrption}</p>
    </div>
  )；
}

function PaperList() {
  const paperList = [
    {
      id: 1,
      title: 'paper1',
      description: 'this is paper 1.'
    },
    {
      id: 2,
      title: 'paper2',
      description: 'this is paper 2.'
    },
  ];

  return (
    <ul>
      {
        paperList.map(paper => (
          <PaperItem data={paper} key={paper.id} />
        ))
      }
    </ul>
  );
}
```

# 获取数据

上面只是简单假数据，数据都是被写死的，肯定不符合真实的情况。

在 Class Component 里常在 componentDidMount 里去获取数据。在 Function Component 稍有不同，使用 useEffect 来执行请求数据这类有副作用的行为。

```jsx
function PaperList() {
  const {paperList, setPaperList} = useState([]);
  
  useEffect(() => {
    ajax('/paperList')
      .then((paperList) => {
        setPaperList(paperList);
      });
  }, []);

  return (...)
}
```

useEffect 有两个参数，第一个参数是回调函数，第二个参数用于控制 effect 是否执行。如果第二个参数是一个空数组，那 effect 就仅仅会执行一次。

假如 paper 列表和用户相关，PaperList 传入一个 userId 就展示该用户的 paper 列表。

```jsx
function PaperList({ userId }) {
  ...
  useEffect(() => {
    const paperList = fetchPaperList(userId);
    setPaperList(paperList);
  }, [userId]);
  ...
}
```

现在只要传入的 userId 改变，就会重新拉去数据。

## 删除 paper

现在新的需求来了，希望能够删除 paper。后端也提供了一个删除 paper 的接口。

```js
function PaperItem(props) {
  const { data } = props;

  const handleDelete = () => {
    ajax({ url: `/paper/${data.id}`, method: 'DELETE' })
      .then((success) => {
        success && alert('删除成功');
      });
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.descrption}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
```

等等，漏掉了什么？我们期望：成功删除一篇 paper 以后，paper 列表应该始终是最新的。我们没有去重新获取 paper 列表。
