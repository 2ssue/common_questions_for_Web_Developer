# ES6의 Class extends 내부 동작원리에 대해서 설명해보세요

`extends` 키워드는 클래스를 다른 클래스의 자식으로 만들기 위해 class 선언 또는 class 식에 사용된다.  
겉보기에는 extends를 통해 class 기반으로 상속을 받는 것으로 표기하지만, javascript는 prototype 기반의 언어이기 때문에 사실 내부적으로는 prototype chain을 이용해 상속이 이뤄진다.  

아래는 class extends를 이용해 `Model`이 `Car`를 상속받은 코드이다. 

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
```

`Car`를 상속받은 `Model`은 사실상 아래 코드와 같은 동작이다.

```javascript
Model.prototype = Object.create(Car.prototype);
Model.prototype.contructor = function Model(branch, mod){
  Car.apply(this, arguments);
  this.model = mod;
}
Model.prototype.show = function(){
  return this.present() + ', it is a ' + this.model;
}
```

디버깅을 통해서도 prototype으로 이뤄져있다는 것을 확인 가능하다.  

![image](https://user-images.githubusercontent.com/42017052/72263353-0828bc80-365c-11ea-9012-ddc0e556febd.png)  

- Model 객체의 prototype: Car
- Car 객체의 prototype: Object

## 참고

Model은 Car의 prototype을 상속받아 사용했기 때문에 Car의 함수들도 사용이 가능해지는데, 이는 prototype chain이 있기 때문에 가능한 것이다.  

만약 위 코드의 mycar가 `Car`객체에 있는 `present()`를 사용하려고 한다면, 자바스크립트 엔진에서는 먼저 `Model` 객체를 확인한다. 하지만 Model에는 carname과 model만 존재하기 때문에 상위 객체를 확인하기 위해 Model의 prototype을 확인한다. Model의 prototype에는 Car가 있고, 그 안에는 `present()`가 있기 때문에 사용이 가능해진다. 이런 식으로 prototype을 타고 올라가 확인을 하기 때문에 이를 prototype chain이라고 부른다.  

## 참조
- [MDN_상속과 프로토타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Object.create()의 역할](https://github.com/2ssue/common_questions_for_JS_Developer/blob/master/2_Object.create.md)
