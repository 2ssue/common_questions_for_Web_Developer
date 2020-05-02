# mutable과 immutable 값과 mutating한 메서드와 non-mutating 한 메서드를 비교하시오.
> This is a translation of 30-Seconds-of-knowledge's [Contrast mutable and immutable values, and mutating vs non-mutating methods.](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/mutable-vs-immutable.md) in korean.

두 용어를 비교하면 아래와 같다:
- Mutable: 변경되기 쉬움
- Immutable: 변경되지 않음

자바스크립트에서 primitive 값들은 immutable한 반면 객체는 mutable 하다. 즉 primitive한 값에 수행된 연산은 원래의 값을 바꿀 수 없지만, 객체에 수행된 연산은 어떤 식으로든 기존의 참조를 바꿀 수 있다는 것을 의미한다. 

`String.prototype`의 모든 메서드는 기존의 string에 영향을 미치지 않고 새로운 string을 return 한다. 반면 `Array.prototype`의 메서드들은 기존 array의 참조를 변경하지 않고 새로운 array를 생성하기도 하는 메서드들이 있고(non-mutating), 그렇지 않고 기존 array을 그대로 변경하는 메서드들도 있다.(mutating) 

```javascript
const myString = "hello!";
myString.replace("!", ""); // 새로운 string을 return함. 기존의 값은 전혀 바꾸지 않음.

const originalArray = [1, 2, 3];
originalArray.push(4); // originalArray를 그대로 변경하여 이 객체의 값이 [1, 2, 3, 4]가 되었음.
originalArray.concat(4); // 새로운 array를 return 함. 기존의 array는 전혀 변경하지 않음.
```

## 알아두면 좋은 것
- array의 mutating한 메서드와 non-mutating한 메서드의 종류들

## 참고 링크
- [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)
