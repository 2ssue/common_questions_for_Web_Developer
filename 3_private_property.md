# 자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요

자바에서 private 변수는 내부를 숨기고, 다른 곳에서 값을 함부로 건드리지 못하게 하는 데 사용된다.  
하지만 자바스크립트에서는 이러한 변수를 생성할 공식적인 private 변수 속성은 존재하지 않지만, 이를 구현하기 위해 다양한 방법이 존재한다.    
  
**1. 접두어 `_`를 붙이는 규칙**  
변수의 앞에 `_`를 붙여서 `_variable`로 정의했다면 private로 간주하기로 규칙을 정한 방법.  
하지만 이 방법을 사용한다고 해서 접근이 안되는 것은 아니기 때문에 실효성은 사실상 없다.  
  
**2. function 스코프를 이용하기**  
함수 내에 값을 정의해서 사용하고, 밖에서 값을 직접 접근하지 못하게 숨기는 방법. 모듈 패턴이라고도 한다.  

```javascript
const test = (funtion (){
  const counter = 0;
  
  reset = function(){
    counter = 0;
    return true;
  }
  
  return {
    incrementCounter: function(){
      return counter++;
    },
    decrementCounter: function(){
      return counter--;
    }
    resetCounter: function(){
      reset(); //사실상 접근할 수 없어 private한 함수
    }
  };
})();

test.incrementCounter();
test.resetCounter();
```
위와 같이 closure를 사용해 내부를 보호하고, test 변수 이외에는 접근이 불가능하도록 한다.    
  
**3. `Symbol`을 활용하기**
> [Symbol 참고](./#Symbol)  

즉시실행함수 또는 블록 스코프에서 심볼을 통해 접근을 제한하는 방법. 
Symbol의 접근 루트가 제한적이어서 가능한 방법이지만, 접근 루트가 아예 없는 것은 아니라서 완벽한 private 형태는 아니다.  

```javascript
const Count = (() => {
  const count = Symbol('COUNT');
  class Count {
    constructor() {
      this[count] = 0;
    }
    inc() {
      return ++this[count];
    }
    dec() {
      return --this[count];
    }
    get score() { return this[count]; }
    set score(n) { this[count] = n; }
  }
  return Count;
})();
const test = new Count();
console.log(test.inc());   // 1
console.log(test.inc());   // 2
console.log(test.dec());   // 1
console.log(test.score);   // 1
test.score = 10;
console.log(test.score);   // 10
console.log(test.inc());   // 11

const testSymbol = Object.getOwnPropertySymbols(test)[0]; || Reflect.ownKeys(test)[0];
test[testSymbol] = 20;
console.log(test.score); // 20
console.log(test.inc()); // 21
```

___

아직 private 변수가 공식적으로 만들어지진 않았지만, [`v8.dev_Public and private class fields`](https://v8.dev/features/class-fields), [`proposal-class-fields_PRIVATE_SYNTAX_FAQ.md`](https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md)를
참고하면 class에 private한 변수를 추가하기 위한 시도가 계속해서 이뤄지는 것으로 보인다. 어떤 블로그에서는 ES6에서 나올 예정이었다고 봤는데, 이에 대한 다른 참고 자료들이 나오지 않는 것을 보면 아직 추가되진 않은 것 같다.  

## 참고
### Symbol
`Symbol()` 함수는 심볼 형식의 값을 반환하는데, 이 심볼은 내장 객체의 여러 멤버를 가리키는 정적 프로퍼티와
전역 심볼 레지스트리를 가르키는 정적 메서드를 가지며, `new Symbol()` 문법을 지원하지 않아 생성자 측면에서는 
불완전한 내장 객체 클래스(built-in object class)와 유사하다.
 
`Symbol()`이 반환하는 모든 심볼 값은 고유하며, 심볼 값은 객체 프로퍼티에 대한 식별자로 사용할 수 있다. 
이것이 심볼 데이터 형식의 유일한 목적이며, 심볼의 데이터 형은 primitive type의 일종이다. 

## 참조
- [디자인 패턴 for javascript](https://yubylab.tistory.com/entry/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-for-javascript-Module-Pattern)
- [ES6 Class에서 private member를 정의하는 방법](https://gomugom.github.io/how-to-make-private-member/)
- [Symbol_MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
