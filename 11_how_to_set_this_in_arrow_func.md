# arrow 함수의 this가 결정되는 방식을 설명해보세요

일반적으로 `this`의 객체는 정적으로 결정되는 것이 아니라, 호출 되었을 때 어떻게 호출되었느냐에 따라 동적으로 결정된다.  
하지만 arrow function의 경우, 함수를 선언할 때 `this`에 바인딩할 객체가 정적으로 결정된다. 이전에 공부했던 [Lexical Scoping](https://github.com/2ssue/common_questions_for_JS_Developer/blob/master/5_clouser%26scope.md#lexical-scoping)와 비슷하게, 자신을 감싼 정적인 범위를 가리킨다.  
  
arrow function의 경우 `this`가 일반 함수와는 다르게 바인딩되기 때문에 조심해서 사용해야한다. 또한 arrow function을 `call()`, `bind()`, `apply()`를 사용해 호출할 때 `this`를 지정해주더라도 무시하기 때문에 주의해서 사용해야한다.  

아래의 경우 `object.func`가 일반 함수일 경우에는 `func`가 `object`에서 호출되었기 때문에 `this`가 `object`가 되지만, arrow function이기 때문에 lexical scoping에 의해 `global`객체가 `this`가 된다.  

```javascript
const object = {
  name: 'object',
  func: () => console.log(`${this.name}'s function`),
};

object.func(); // 's function
```

## 참고
### `this`란 무엇일까?
Javascript에서 `this` 키워드는 그것이 속한 객체를 가르키는 말이다. 어디에서 사용했느냐에 따라서, 이 키워드가 가르키는 값이 달라진다.  
- method에서 `this`는 **이를 소유한 객체**를 의미한다.
- 혼자 쓰일 때 `this`는 **global 객체**를 의미한다.
- 함수 안에서 `this` 는 **global 객체**를 의미한다.
- 엄격한 모드 내 (`use strict mode`) 함수 안에서 `this`는 `undefined`이다.
   > In a function, in strict mode, `this` is `undefined`.
   > ```javascript
   > "use strict";
   > function myFunction(){
   >   return this; // undefined
   > } 
   > ```
- Event 안에서 `this`는 해당 이벤트가 동작한 **element**를 의미한다. 
- `call()`, `apply()`, `bind()` 메소드들은 `this`를 어떤 객체로든 바꿀 수 있다. 

#### `call()`과 `apply()`, `bind()`
`call()`과 `apply()`, `bind()`에서 `this`로 제공한 값이 객체가 아니라 원시 타입이라면, 내부에서 ToObject라는 연산을 사용해 객체로 변환을 시도한다. 따라서 주어진 값이 숫자나 문자열처럼 원시 값이면, 관련된 생성자를 통해 객체로 변환한다. 그래서 `7`은 `new Number(7)`, 문자열 `'foo'`는 `new String('foo')`를 사용한 것과 같아진다.  
  
이 함수들은 모두 `this`를 바꾸는 데 사용한다는 공통점이 있지만, `call()`과 `apply()`는 함수를 호출하면서 `this`를 바꾸는 반면, `bind()`는 그렇지 않다는 차이점이 있다. 때문에 `call()`과 `apply()`는 단순히 함수를 호출할 때 사용되기도 한다.  

```javascript
const object = {
  author: '2ssue',
};

function print(){
  console.log(this.author);
}

print.call(object); // 2ssue
print.call(null); // undefined
print.apply(object); // 2ssue
print.bind(object); // do nothing
```

## 참조
- [The Javscript `this` Keyword_W3schools.com](https://www.w3schools.com/js/js_this.asp)
- [MDN_this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [MDN_bind](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
