# undefined와 null의 차이점을 설명하세요

`undefined`은 변수를 선언하고 값을 할당하지 않은 상태, `null`은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 즉, `undefined`는 자료형이 없는 상태이다.  
따라서 typeof를 통해 자료형을 확인해보면 `null`은 `object`로, `undefined`는 `undefined`가 출력되는 것을 확인할 수 있다.   

```javascript
typeof null // 'object'
typeof undefined // 'undefined'
null === undefined // false
null == undefined // true
null === null // true
null == null // true
!null // true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```

## undefined
`undefined`는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당된다. 이 값은 전역 객체의 속성 중 하나로, 전역 스코프에서의 변수이기도 하다. 따라서 `undefined` 변수의 초기 값은 `undefined` 원시 값이다.  
> cf) `undefined`는 예약어가 아니기 때문에, 전역 범위 외에서 변수 이름으로 사용할 수 있다. 그러나 유지보수와 디버깅에 어려움을 겪을 수 있으므로 피하는 것이 좋다.  

아래의 경우에 변수가 `undefined`를 반환한다.  
- 값을 할당하지 않은 변수
- 메서드와 선언에서 변수가 할당받지 않은 경우
- 함수가 값을 return 하지 않았을 때

## null
`null`은 원시값(Primitive Type) 중 하나로, 어떤 값이 **의도적으로** 비어있음을 표현한다. `undefined`는 값이 지정되지 않은 경우를 의미하지만, `null`의 경우에는 해당 변수가 어떤 객체도 가리키고 있지 않다는 것을 의미한다. 
> cf) `null`은 `undefined`처럼 전역 객체의 속성 중 하나가 아니라 리터럴 값이다. 

## 알아두면 좋은 것
- `typeof undefined`는 출력하면 `undefined`이다.
- `typeof null`은 출력하면 `object`이다. 하지만 이는 여전히 원시 타입(primitive value)로, JavaScript에서는 구현 버그로 간주한다.
- `undefined == null`은 `true`이다.

## 참조
- [MDN_용어사전_undefined](https://developer.mozilla.org/ko/docs/Glossary/undefined)
- [MDN_표준 내장 객체_undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [MDN_표준 내장 객체_null](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null)
- [What is the difference between `null` and `undefined`?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/null-vs-undefined.md)