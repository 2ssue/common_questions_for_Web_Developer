# HTML과 React event handling의 차이는 무엇일까요?
> This is a translation of 30-Seconds-of-knowledge's [What is the difference between HTML and React event handling?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/html-vs-react-event-handling.md) in korean, and contains additional learning contents on this. 

HTML에서 속성의 이름은 모두 lowercase(소문자)이고, 어딘가에 정의된 함수를 string 형태로 전달받는다.

```html
<button onclick="handleClick()"></button>
```

React에서 속성의 이름은 camelCase이고, `{}` 형태의 bracket을 통해 함수를 전달받는다.

```html
<button onClick={handleClick} />
```

HTML에서 `false`를 return하여 element에 정의된 기본 동작을 막을 수 있는 반면, React에서는 명시적으로 preventDefault를 호출해야한다. 

```html
<a href="#" onclick="console.log('The link was clicked.'); return false" />
```

```javascript
function handleClick(e){
    e.preventDefault();
    console.log("The link was clicked.");
}
```

## 알아두면 좋은 것 
- HTML은 소문자(lowercase) 형태를 쓰고, React는 camelCase를 쓴다.

## 참고 링크
- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)