# 아래처럼 동작하는 flatten 함수를 reduce를 활용해서 만들어보세요
```javascript
const arr = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = flatten(arr);
console.log(flattenedAray);
```

## custom flatten

```javascript
/**
 * Author: 2ssue
 * @param {Object Array} arr
 */
function flatten(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
}

function flattenAllUsingRecursive(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flattenAllUsingRecursive(cur));
    }
    return acc.concat(cur);
  }, []);
}

function flattenAllUsingStack(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
}
```

## 참고

비슷한 함수로 제안 단계에 있는 `flat()`과 `flatMap()` 함수가 존재한다. proposal의 최종 단계로, 다음 버전에 추가될 예정으로 보인다. 

### Array.prototype.flat()
Array의 표준 내장 객체 함수로, 똑같은 동작을 하는 `flat()` 함수가 존재한다. `flat()` 메서드는 모든 하위 배열 엘리먼트를 지정된 깊이까지 재귀적으로 이어붙여 새로운 배열을 생성한다.  
  
```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### Array.prototype.flatMap()
`flatMap()` 메서드는 `flat()`과 동일하게 펼치는 역할을 하지만, 깊이는 1로 `flat()`후 `map()`을 진행하는 것과 동일하다. 하나의 메소드로 병합되어있기 때문에 조금 더 효율적이다.  

```javascript
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 한 레벨만 평평화됨
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

## 참조
- [MDN_flat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [MDN_flatMap()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
