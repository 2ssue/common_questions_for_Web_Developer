# `==`보다 `===`을 써야할 때는?

대부분 `==` (Equality Operator)보다는 `===` (Strict Equality Operator)를 사용하는 것이 더 나은 방법이다.  

`==` 연산자는 양쪽의 타입이 다른 경우, 타입을 강제로 형변환한뒤 비교한다. 형변환 규칙은 아래와 같다.  
- 숫자 <> 문자열 → 문자열 <> 문자열
- Primitive Type <> Object → Primitive Type <> Primitive Type

때문에 아래와 같은 경우 우리의 예상과는 다른 값이 반환되는 경우가 있다.  

```javascript
1 == 1            // true
"1" == 1          // true
1 == '1'          // true
0 == false        // true
0 == null         // false
0 == undefined    // false
null == undefined // true
```

## 참고
### Primitive Type
Immutable 하게 변하는 javascript의 기본 자료형
- String
- Number
- Boolean
- Null
- Undefined
- Symbol

## 참조
- [MDN_비교연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
