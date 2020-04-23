# 재귀란 무엇이고, 언제 이것이 유용할까요? 
> This is a translation of 30-Seconds-of-knowledge's [What is recursion and when is it useful?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/recursion.md) in korean, and contains additional learning contents on this.

재귀는 과정을 반복적으로 적용하는 것이다. 자바스크립트에서 재귀는 기본 조건에 도달할 때까지 반복적으로 자신을 호출하는 함수가 포함된다. 기본 조건이 없으면 함수가 무한히 자신을 호출하기 때문에 재귀 루프를 벗어날 기본 조건이 필요하다. 재귀는 깊이를 알 수 없는 데이터 구조를 다뤄야할 때 매우 유용하다. 

예를 들어, 1차 배열에 담겨있지만 UI에는 중첩해서 표시해야하는 댓글 스레드 database가 있다고 하자. 각 댓글은 부모 댓글이 없는 최상위 댓글이거나 부모가 있는 답글이다. 댓글은 답글의 답글의 답글이 될 수 있고, 우리는 얼마나 깊은 레벨까지 답글이 달려있는지를 모른다고 할 때 재귀가 도움이 될 수 있다. 

```javascript
const nest = (items, id = null, link = "parent_id") => 
                items
                    .filter(item => item[link] === id)
                    .map(item => ({...item, children: nest(items, items.id)}));

const comments = [
    {id: 1, parent_id: null, text: "게시글의 첫 댓글"},
    {id: 2, parent_id: 1, text: "게시글 첫 댓글의 첫 답글"},
    {id: 3, parent_id: 1, text: "게시글 첫 댓글의 두번째 답글"},
    {id: 4, parent_id: 3, text: "게시글 첫 댓글의 두번째 답글의 첫 답글"},
    {id: 5, parent_id: 4, text: "게시글 첫 댓글의 두번째 답글의 첫 답글의 답글"},
    {id: 6, parent_id: null, text: "게시글의 두번째 댓글"},
]

nest(comments);

/*
[
    {id: 1, parent_id: null, text: "게시글의 첫 댓글", children: [...]},
    {id: 6, parent_id: null, text: "게시글의 두번째 댓글", children: []},
]
*/
```

위 예제에서는 `filter()`가 빈 배열을 반환하는 경우가 기본 조건이다. 여기에 연결된 `map()`에서 재귀 함수를 호출하는 callback 함수를 호출하지 않기 때문에 루프가 끊어지게 된다.

## 알아두면 좋은 것
- 재귀는 중첩 깊이를 알 수 없는 데이터 구조를 다룰 때 유용하다.
- 재귀는 루프에서 벗어날 기본 조건이 꼭 필요하다. 그렇지 않으면 무한히 자신을 호출한다.

## 참고 링크
- [In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)