# 순수함수란 무엇인가요?
> This is a translation of 30-Seconds-of-knowledge's [What is pure function?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/pure-functions.md) in korean, and contains additional learning contents on this. 

순수함수는 아래 조건을 만족하는 함수이다.

- 같은 입력에 대해서 같은 결과를 return하는 함수
- 함수의 바깥 영역에 side effect를 초래하지 않는 함수 (함수 외부의 데이터나 함수에 전달된 데이터를 변경하지 않는 함수)

순수함수는 위 두 가지 조건을 만족하면 함수 내의 로컬 데이터를 변경할 수 있다. 

**순수함수**
```javascript
const a = (x, y) => x + y;
const b = (arr, value) => arr.concat(value);
const c = arr => [...arr].sort((a, b) => a - b);
```

**순수함수가 아닌 함수**
```javascript
// 항상 같은 결과를 return 하지 않음
const a = (x, y) => x + y + Math.random(); 
// 전달받은 arr에 value를 넣어서 데이터를 변경함
const b = (arr, value) => (arr.push(value), arr); 
// arr를 정렬해서 순서가 바뀌게 함
const c = arr => arr.sort((a, b) => a - b);
```

## 알아두면 좋은 것
- 순수함수는 신뢰성이 있기 때문에 추론하기 쉽다.
- 명시적으로 side effect가 있지 않는 한 모든 함수는 순수해야한다. (참고. `setInnerHTML`)
- 함수에 return 값이 없으면, side effect를 유발한다는 것을 나타내는 것이다.

## 참고 링크
- [Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)