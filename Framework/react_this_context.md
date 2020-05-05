# React component class에서 메서드의 `this` context가 올바른지 어떻게 확인할까요?
> This is a translation of 30-Seconds-of-knowledge's [How do you ensure methods have the correct this context in React component classes?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/methods-context-react-classes.md) in korean.

자바스크립트 클래스에서 기본적으로 메서드는 바인딩 되지 않는다. 이것은 `this`가 바뀔 수 있다는 것을 의미하고(event handler의 경우 event를 listening하고 있는 element로 변경됨), component instance를 참조하지 않는다는 것을 의미한다. 이 문제를 해결하기 위해서는 `Function.prototype.bind()`를 사용해서 `this`가 component instance를 참조하도록 강제로 변경해야한다.

```javascript
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick(){
    // 어떤 로직을 수행
}
```

- `bind`는 보기 안좋아보일 수 있고, `constructor`에서 정의되어야하기 떄문에 새로운 public class 필드 구문이 주로 선호된다:

```javascript
handleClick = () => {
    console.log('this is: ', this);
}

render(){
    return (
        <button onClick={this.handleClick}>
            Click me
        </button>
    );
}
```

- 위 방법 외에도 컴포넌트에 inline arrow function은 정적인(lexical) `this`가 보존되기 때문에 아래와 같이 사용할 수도 있다: 

```javascript
<button onClick={e => this.handleClick(e)}>Click me</button>
```

하지만 이 방법을 사용할 경우 render때 마다 새로운 함수 참조를 생성해서 컴포넌트로 넘겨줘야하므로 불필요한 re-rendering이 발생할 수 있다는 것을 명심해야한다. `shouldComponentUpdate` 또는 `PureComponent`를 사용해 얕은 동등성 비교로 불필요한 re-render를 막을 수 있다. 만약 성능이 중요하다면 function 참조가 일정하게 유지되는 constructor `bind` 사용방법이나, public class 필드 구문을 사용하는 방법이 좋다. 

## 알아두면 좋은 것
- component 생성자의 instance context에 메서드를 bind하거나, public class 필드 구문을 사용하거나, inline arrow function을 사용할 수 있다.

## 참고 링크 
- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
- [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)