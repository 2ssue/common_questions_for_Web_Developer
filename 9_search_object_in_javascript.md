# 객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.

1. `for ... in`
```javascript
const object = { a: 1, b: 2, c: 3 };
for(const key in object){
  console.log(`${key}: ${object[key]}`);
}
// result
// a: 1
// b: 2
// c: 3
```

`for ... in`을 사용하면 객체 내에 있는 key들의 목록을 얻을 수 있다. 이를 통해 객체를 탐색할 수 있다. 
> cf. `for ... of`는 객체 내의 value의 목록을 얻을 수 있는 구문이다.  

여기서 알아둬야할 점은, 객체를 탐색할 때 그냥 `for ... in`을 사용하는 것 보다는 `for ... in`에 `hasOwnProperty()`를 같이 사용하는 것이 안전하다. `for ... in`의 경우 우리가 원하던 것처럼 해당 객체만 탐색하는 것이 아니라, 상위 객체인 prototype까지 확인하기 때문이다. 그래서 eslint airbnb의 경우, `for ... in`의 사용을 자제하도록 경고를 띄운다. 아래 코드와 그 결과값을 보면 더 쉽게 확인이 가능하다.  

```javascript
const object = { a: 1, b: 2, c: 3 };
object.d = function() {
  console.log('hello');
};

Object.prototype.e = function() {
  console.log('hi');
};

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
console.log('-------');
for (const key in object) {
  if (object.hasOwnProperty(key)) console.log(`${key}: ${object[key]}`);
}

// result
// a: 1
// b: 2
// c: 3
// d: function() {
//   console.log('hello');
// }
// e: function() {
//   console.log('hi');
// }
// -------
// hasOwnProperty를 사용한 뒤, prototype에 정의해뒀던 e는 출력되지 않는 것을 확인할 수 있다. 
// a: 1
// b: 2
// c: 3
// d: function() {
//   console.log('hello');
// } 
```

2. `Object.keys()`
```javascript
const object = { a: 1, b: 2, c: 3 };
Object.keys(object).forEach((key) => {
  console.log(`${key}: ${object[key]}`);
});
// result
// a: 1
// b: 2
// c: 3
```

`Object.keys()`의 결과는 해당 객체의 key 배열이기 때문에, 주로 Array의 고차함수를 이용해 탐색하곤 한다. 다른 반복문을 사용해 탐색하는 것도 가능하다. 
