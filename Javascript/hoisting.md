# Javascript에서 hoisting은 어떻게 동작하나요?
> This is a translation of 30-Seconds-of-knowledge's [How does hoisting work in JavaScript?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/hoisting.md) in korean.

호이스팅은 컴파일 단계에서 변수 및 함수 선언이 메모리에 저장되는 자바스크립트의 메커니즘이다. 즉 함수와 변수가 선언된 위치에 관계없이, 범위가 전역인지 로컬인지에 관계없이 선언이 가장 위로 올라가게 된다.

하지만, 값은 선언과 함께 호이스팅 되지 않는다.

아래 코드는

```javascript
console.log(hoist);
var hoist = "value";
```

이 아래 코드와 같다: 
```javascript
var hoist;
console.log(hoist);
hoist = "value";
```

따라서 위와 같이 `hoist`를 출력하면 `"value"`가 아닌 `undefined`가 출력된다.

또한 호이스팅은 함수가 선언되기 전에 함수를 호출할 수 있도록 한다. 

```javascript
myFunction(); //에러가 발생하지 않고 "hello"가 찍힘
function myFunction(){
    console.log("hello");
}
```

하지만 함수를 값으로 할당하지 않도록 함수의 표현에 주의해야한다.

```javascript
myFunction(); // 에러 발생. `myFunction`은 함수가 아닙니다.
var myFunction = function(){
    console.log("hello");
}
```

## 알아두면 좋은 것
- 호이스팅은 선언부를 앞으로 이동시키는 자바스크립트의 기본 동작이다.
- 함수 선언은 변수 선언이 호이스팅 되기 전에 먼저 호이스팅 된다. 

## 참고 링크
- [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

## 추가 참고 링크
- [클로저와 스코프](./5_clouser&scope.md)