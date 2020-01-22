# 객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요 (객체의 깊이는 1단계만 있다고 가정)

만약 객체 안에 Object 타입이 아닌 값들만 있다면 단순한 복사로도 새로운 객체를 만들 수 있다. 
1. 구조분해로 새로운 객체 만들기
2. `Object.assign()`을 활용해 새로운 객체 만들기
3. `for ... in`문을 활용해 새로운 객체 만들기

```javascript
function shallowCopyObject(object){
  return { ...object };
  // OR
  return Object.assign({}, object);
}

const object = {
  a: 1,
  b: 2,
  c: 3,
};
const object2 = shallowCopyObjet(object);
console.log(object === object2) // false
object.a = 4;
console.log(object1, object2); // {a: 4, b: 2, c: 3}, {a: 1, b: 2, c: 3}
```

그런데 이 방법으로 객체를 복사하면, 객체 안에 Object 타입이 있을 때는 완전한 새로운 객체가 되지 않는다. 객체 그 자체는 다른 객체이지만, 내부 객체는 기존 객체가 가지고 있는 값을 참조하게 되어서 만약 위 방법으로 값을 복사하게 된다면 아래와 같이 기존 객체와 새로운 객체가 같이 변경되는 경우가 생긴다.  

```javascript
const object2 = copyObject(object);
console.log(object === object2); // false
object2.a.push(4);
console.log(object); // { a: [ 1, 2, 3, 4 ], b: 2, c: 3 }
console.log(object2); // { a: [ 1, 2, 3, 4 ], b: 2, c: 3 }
```

그래서 만약 객체의 내부 값이 Array나 Object일 경우, 새로운 메모리를 참조하는 값을 만들어서 재할당해주어야 완전한 deepCopy가 가능해진다. 하지만 Array와 Object 값이 더 깊게 들어가게 되는 경우에는 메모리 할당을 위해 무한한 반복을 할 수 있기 때문에 객체의 완전한 deepCopy는 조금 어려운 부분이다. 
