# NodeList 타입을, Array에 있는 reduce 메서드를 사용하는 방법은?

1. NodeList 타입을 Array로 변환해서 사용하면 reduce를 사용할 수 있다. NodeList 타입을 Array로 변환하는 방법은 아래와 같다.  
```javascript
const div_list = document.querySelectorAll('div'); // returns NodeList
const div_array = Array.prototype.slice.call(div_list); // converts NodeList to Array

// OR
const nodelist = document.querySelectorAll('.divy');
const divyArray = Array.from(nodelist);

// OR
const divyArray = […document.querySelectorAll('.divy')];
```

2. 또는 NodeList의 prototype 함수인 forEach를 이용해 NodeList를 순환할 수 있기 때문에, 이를 활용해 reduce와 비슷한 효과를 내는 것도 가능하다.   
3. 이 외에도 NodeList.prototype을 이용해 확장하여 custom reduce를 만드는 방법도 있다. 
```javascript
NodeList.prototype.reduce = ...
```

## 참고

### `Array.from()`
유사 배열 객체나, 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만드는 함수.

```javascript
Array.from('foo') // ['f', 'o', 'o']
Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]
Array.from(m.values());
// [2, 4, 8];

Array.from(m.keys());
// [1, 2, 4];
```

## 참조
- [MDN_NodeList](https://developer.mozilla.org/ko/docs/Web/API/NodeList)
- [MDN_Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
