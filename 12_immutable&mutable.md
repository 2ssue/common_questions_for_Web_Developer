# immutable과 mutable은 무엇이 다른것인가요?

Mutable한 객체는 생성된 이후에 상태가 변경될 수 있는 객체이고, Immutable한 객체는 생성된 이후에 상태가 변경되지 않는 객체를 말한다. 자바스크립트에서 Object와 Array를 제외한 모든 타입은 Immutable한 타입이다.  

```javascript
var immutableString = 'Hello';

// In the above code, a new object with string value is created.

immutableString = immutableString + 'World';

// We are now appending "World" to the existing value.
```

`immutableString`에 string 값을 더하면, 아래와 같은 이벤트들이 발생한다.  
- `immutableString`에 존재하던 값을 읽음
- 'World'가 `immutableString`에 존재하던 값에 덧붙여짐
- 결과값이 새로운 메모리 블록에 할당됨
- `immutableString` 객체가 새로운 메모리 공간을 가리킴
- 이전에 `immutableString`이 가리키던 메모리 공간은 GC의 대상이 됨

따라서 Immutable한 타입은, 이전의 상태를 전혀 변화하지 않고 새로운 상태로 만들기 때문에 변경되지 않는다고 말하는 것이다. 

## Immutable
Immutable 객체는 내용이 변하지 않는 객체를 말한다. 객체는 다양한 이유로 불변적일 수 있는데, 예시로 아래와 같은 경우가 있다.  
- 성능을 향상시키기 위함
  - 객체가 미래에 변할 계획이 없을 때
- 메모리 사용을 줄이기 위함
  - 전체 객체를 복사하지 않고 객체 참조를 만듦
- Thread-safety (쓰레드끼리 자원 공유할 때 안전하다는 뜻 같음)
  - 여러개의 쓰레드가 서로 간섭하지 않고 같은 객체를 참조할 수 있음

## Mutable
Mutable은 바뀔 수 있는 변수 타입을 말한다. Javascript에서는 object와 array만 Mutable한 타입이고, 원시 타입은 Immutable하다.  

> Mutable한 값을 Immutable하게 만들기 위해서 새로운 변수를 만들어 보관할 수 있지만, 이전 값은 여전히 메모리에 남아있기 때문에 GC가 필요하다. 

## 참조
- [MDN_Immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable)
- [MDN_Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
