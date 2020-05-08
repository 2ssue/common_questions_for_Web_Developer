# Object.create의 역할은 무엇인가요?
 
`Object.create()` 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만든다.  
  
주로 `Object.create()`를 이용해 기존의 객체를 상속해 확장하는데 사용된다. 

```javascript
Object.create(proto[, propertiesObject])
```

- **proto**
  - 새로 만든 객체의 프로토타입이어야 할 객체
- **propertiesObject**
  - 선택사항. undefined가 아닐 경우, 자신의 속성이 열거가능한 객체는 해당 속성명으로 새로 만든 객체에 추가될 속성 설명자(descriptor)를 지정한다. 
  - `Object.defineProperties()`의 두번째 인자와 동일한 역할을 한다. [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
    > 정확한 사용처는 잘 모르겠으나 다음 사이트도 참고하면 좋을 듯 함 [참고](https://wonism.github.io/what-is-decorator/)
  ```javascript
  const example = Object.create(Object.prototype, {
    foo: { writeable: true, configurable: true, value: 'hello' },
    bar: {
      configurable: false, //변경 및 삭제 가능 여부
      get: function(){
        return 10;
      },
      set: function(){
        console.log('Setting `o.bar` to', value);
      },
    },
  });

  console.log(example.foo, example.bar); //hello 10
  console.log(example); //{}
  ```

## 참고
### `new Object()`와의 차이점
두 방식 모두 새로운 객체를 생성하는데, `new`와 `Object.create()`를 사용한 생성 방식은 약간의 차이점을 보인다.  
아래 코드를 통해 그 차이를 확인할 수 있다.  
  
`new`를 사용했을 경우 함수가 생성자로 실행되지만, `Object.create()`의 경우 동일한 객체만 생성하고 생성자는 실행하지 않는다. 

```javascript
function Vehicle(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.information = function() {
  console.log(`${this.name} can move to ${this.maxSpeed}km/h`);
};

const taxi = new Vehicle('taxi', 100);
taxi.information(); // taxi can move to 100km/h

function LightCar(name, maxSpeed, currentSpeed) {
  Vehicle.apply(this, arguments);
  this.currentSpeed = currentSpeed;
}

LightCar.prototype = Object.create(Vehicle.prototype);
LightCar.prototype.constructor = LightCar;
LightCar.prototype.test = function() {
  if (this.maxSpeed < this.currentSpeed) {
    console.log(
      `${this.name} cannot move ${this.currentSpeed}km/h. Max speed is ${this.maxSpeed}km/h`,
    );
    return;
  }
  console.log(`${this.name} can move`);
};

const ray = new LightCar('ray', 90, 100);
ray.information(); //ray can move to 90km/h
ray.test(); //ray cannot move 100km/h. Max speed is 90km/h
ray.currentSpeed = 80;
ray.test(); //ray can move
```

### prototype
생성자 함수에 정의한 모든 객체가 공유할 원형. 클래스 내에 정의한 함수라고 생각하면 쉽다.
만약 위 처럼 함수를 prototype을 이용해 생성하지 않고, `this.information = function (){...}`처럼 생성한다면 비효율적이니 되도록 prototype을 이용하는 것이 좋다.  
prototype일 경우 상속받는 모든 객체가 같은 prototype을 공유하고 있기 때문에 한번만 생성되지만, this를 사용할 경우 객체를 생성할 때 마다 메소드도 하나씩 새로 생성되기 때문에 메모리 낭비가 생긴다. 

## 참조
- [MDN_Object.create()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [zerocho 블로그_객체 상속](https://www.zerocho.com/category/JavaScript/post/573d812680f0b9102dc370b7)
