# 객체를 생성하는 다양한 방법을 설명해보세요. 언제 어떤 방법이 선호되나요?

> 30-Seconds-of-knowledge의 [Describe the different ways to create an object. When should certain ways be preferred over others?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/object-creation.md)를 번역한 글입니다.

## Object literal
데이터 저장이 한번만 발생할 때 주로 사용한다.

```javascript
const person = {
    name: "John",
    age: 50,
    birthday(){
        this.age++
    }
}
person.birthday(); //person.age === 51 (true)
```

## 생성자 (Constructor)
객체 인스턴스가 서로의 데이터에 영향을 주지 않고 여러번 생성돼야할 때 주로 사용한다. `new` 연산자는 생성자를 호출하기 전에  사용해야한다. 그렇지 않을 경우 global 객체가 변형된다.

```javascript
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.birthday = function(){
    this.age++
}

const person1 = new Person("John", 50)
const person2 = new Person("Sally", 20)
person1.birthday() //person1.age === 51 (true)
person2.birthday() //person2.age === 21 (true)
```

## Factory Function
생성자 방식과 비슷하지만, clouser를 이용해 private 데이터를 저장할 수 있다. 또한 `new` 연산자나 `this` 키워드가 필요하지 않다. Factory Function은 프로토타입의 idea를 버리고, 모든 프로퍼티와 메소드를 객체의 고유한 속성으로 유지한다. 

```javascript
const createPerson = (name, age) => {
    const birthday = () => person.age++
    const person = {name, age, birthday}
    return person
}
const person = createPerson("John", 50)
person.birthday() //person.age === 51
```

### 참고
- [Clouser](./5_clouser&scope.md)

## `Object.create()`
새로 생성된 객체의 프로토타입을 설정한다. 

```javascript
const personProto = {
    birthday(){
        this.age++
    }
}
const person = Object.create(personProto)
person.age = 50
person.birthday() //person.age === 51
```

`Object.create()`의 두번째 argument는 새 속성에 대한 설명자 역할을 한다.

```javascript
Object.create(personProto, {
    age: {
        value: 50,
        writeable: true,
        enumerable: true
    }
})
```

### 참고
- [`Object.create()`의 역할](./2_Object.create.md)

## 알아두면 좋은 것
- [프로토타입](./17_prototype.md)
- Factory Function은 closure를 이용해 private한 변수, 메소드를 저장하게 만들지만 메모리의 사용량을 증가시키는 트레이드오프가 존재한다. 반면 클래스들은 이런 기능은 없지만 단일 prototype 객체를 재사용함으로써 메모리에 영향을 잘 받지 않는다.
