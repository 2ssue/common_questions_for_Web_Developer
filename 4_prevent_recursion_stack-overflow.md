# JS에서 재귀호출로 인한 stack overflow를 막을 수 있는 방법은?

재귀는 반복문을 표현하기 위한 가장 강력한 방법이지만, 끝없는 반복을 막기 위해서는 조건을 잘 걸어야 한다.  
정상적인 재귀라도 너무 많은 호출이 이뤄질 경우 `메모리 초과(Stack overflow)` 오류를 발생시킬 수 있다.  
  
가장 좋은 예로 아래 `factorial` 함수를 참고해보자.  

```javascript
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// factorial(10)
//  => 3628800
// factorial(32768)
//  => Uncaught RangeError: Maximum call stack size exceeded
```

![callstack](https://raw.githubusercontent.com/kenspirit/blog-cdn-data/master/factorial_stack_change_flow.png)

> [Execution Context](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)에 대해서는 이 글을 참고  
  
간단히 말해서 이 `factorial` 함수를 한번 실행할 때마다 execution context가 생성되기 때문에, 이 재귀 함수는 이전 execution context를 끝내지 못하고 
계속해서 쌓이게 된다. 이 그림은 단순히 `factorial(3)`에 대한 call stack 이지만 `factorial(32768)`을 상상하면 그 크기가 어마어마할 것이다.  
  
## Tail recursion
Tail recursion(꼬리 물기 최적화)은 call stack에 새로운 스택 프레임을 생성하지 않고 함수를 참조할 수 있게한다.  
  
대부분 재귀 함수는 이전 스택 프레임을 더 이상 필요로 하지 않기 때문에 이를 적절히 수정하면 최적화를 할 수 있는데, 
그러면 프로그램은 호출된 서브루틴으로 점프할 수 있다.  
  
그러니까 다음 연산에 필요한 값을 다음 루틴에 넘기면 호출 당했던 곳으로 돌아와 연산을 거칠 필요가 없기 때문에 
메모리에 쌓이지 않고 한번씩만 호출 되도록 만드는 형태이다.  
  
위 코드를 tail recursion 형태로 바꾸면 아래와 같다.  

```javascript
function factorial(n) {
  function cal(n, result) {
    return n === 0 ? result : cal(n - 1, n * result);
  }

  return cal(n, 1);
}
```

하지만, 이러한 최적화 지원 기능은 ES6부터 지원되기 시작해서 아직 많은 JS engine에서 지원하지 않고 있다. [참고](https://kangax.github.io/compat-table/es6/)  

<details><summary>여기는 참고용_Trampoline(tail recursion의 polyfill 코드로 예상)</summary>

## Trampoline

> 잘 모르겠지만 일단 참고용..  

Trampoline은 반복적으로 아무것도 하지 않는 기능을 호출하는 반복문이다. 이를 이용해서 위와 같은 tail recursive 형태의 재귀함수를 작성할 수 있다.  

```javascript
function trampoline(fn) {
  var op = fn;
  while (op != null && typeof op === 'function') {
    op = op();
  }
}
```

함수의 실행 결과가 더 이상 함수를 반환하지 않으면 반복문이 멈추는 형태이다. 이 형태로 뭘 만들 수 있는지 잘 이해가 되진 않는다.  
이런 스타일로 위의 `factorial`을 다시 작성해보면, 아래와 같다. 이 형태로 작성하면 factorial을 1000000까지 계산할 수 있다고 한다.  
  
```javascript
function thunkedFactorial(n, cb) {
  function cal(n, result, cb) {
    if (n === 0) {
      cb(result);
      return null;
    }

    return function() {
      return cal.bind(this, n - 1, n * result, cb);
    };
  }

  return cal.bind(this, n, 1, cb);
}

trampoline(thunkedFactorial.bind(this, 1000000, console.log.bind(console)));
```

하지만 이 형태도 `응답하지 않는 스크립트` 경고를 생성할 수 있으므로, `setTimeout` trick을 잘 써야한다.  
  
```javascript
function factorial(n, cb) {
  function cal(n, result) {
    if (n === 0) {
      cb(result);
    } else {
      setTimeout(function() {cal(n - 1, n * result)});
    }
  }

  return cal(n, 1);
}
```
</details>

## 참조

- [How to avoid Stack overflow error on recursion](http://www.thinkingincrowd.me/2016/06/06/How-to-avoid-Stack-overflow-error-on-recursive/)
- [꼬리 물기 최적화(Tail Call Optimization)](https://velog.io/@yesdoing/%EA%BC%AC%EB%A6%AC-%EB%AC%BC%EA%B8%B0-%EC%B5%9C%EC%A0%81%ED%99%94Tail-Call-Optimization%EB%9E%80-2yjnslo7sr)
- [Execution Context](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)
