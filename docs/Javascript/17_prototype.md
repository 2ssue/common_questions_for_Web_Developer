# prototype의 동작방식에 대해서 설명해보세요

> 이전에 공부했던 [Object.crete의 역할](./2_Object.create.md)과 [Class Extends의 내부 동작](./8_es6_class_extends.md)도 비슷한 내용을 담고 있으니 참고해도 좋을 것 같다.  

Javascript는 흔히 **프로토타입 기반 언어(prototype-based language)** 라고 불린다. 모든 객체들이 메소드와 속성들을 상속받기 위한 템플릿으로서 프로토타입 객체를 가진다는 의미이다. 프로토타입 객체는 상위 프로토타입 객체로부터 메소드와 속성을 상속받을 수 있고, 그 상위 프로토타입 객체 또한 마찬가지 동작을 할 수 있다. 이렇게 프로토타입을 연속적으로 이어받는 것을 **프로토타입 체인(prototype chain)** 이라고 하며, 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록 하는 바탕이 된다.  

> cf) 정확히 말하자면 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 `prototype`이라는 속성에 정의되어 있다. 

예제를 통해 프로토타입이 어떻게 동작하는지 한번 살펴보자. 

```javascript
function Person(first, last, age, gender, interests){
  this.first = first;
  this.last = last;
  //...
}

const person1 = new Person('Sujeong', 'Lee');
person1.valueOf();
```

![image](https://mdn.mozillademos.org/files/13891/MDN-Graphics-person-person-object-2.png)

위와 같이 `person1` 객체를 생성했을 때, `Object`에 정의되어있는 `valueof()`메소드를 호출하면 어떻게 동작할까?
1. `person1` 객체가 `valueOf()`를 갖고 있는지 체크
2. `person1` 객체에 없으므로 이의 프로토타입 객체(`Person()` 생성자의 프로토타입)에 `valueOf()`가 있는지 체크
3. 여기에도 없으므로 `Person()` 생성자의 프로토타입 객체의 프로토타입 객체(`Object()` 생성자의 프로토타입)가 `valueOf()` 메소드를 가지고 있는지 체크
4. 찾았다! 호출!

프로토타입 체인에서 상속받은 메소드와 속성들은 해당 객체로 복사되는 것이 아니라, 참조하여 접근할 수 있게 된다는 점을 기억해야한다. 때문에 상위의 prototype이 변경되면, 하위에서도 변경하지 않고 그대로 사용할 수 있게 된다. 이러한 특성 때문에 prototype은 메모리 효율이 높다는 장점이 있다. 
> cf) [prototype](./2_Object.create.md#prototype)

## 참조
- [MDN_Object prototypes](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Object.crete의 역할](./2_Object.create.md)
- [Class Extends의 내부 동작](./8_es6_class_extends.md)
- [2ssue블로그_prototype이란?](https://2ssue.github.io/base/javascript-prototype/)
