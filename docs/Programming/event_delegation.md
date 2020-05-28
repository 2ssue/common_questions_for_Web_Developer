# Event Delegation은 무엇이고, 이것은 왜 유용할까요? 이것을 사용하는 예시를 보여줄 수 있나요?
> This is a translation of 30-Seconds-of-knowledge's [What is event delegation and why is it useful? Can you show an example of how to use it?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/event-delegation.md) in korean, and contains additional learning contents on this. 

Event Delegation은 단일 공통 조상에 이벤트를 위임하는 기법이다. Event bubbling으로 인해 이벤트는 각 조상 element에서부터 해당 이벤트를 listening 중인 루트까지 점진적으로 handler를 실행해 DOM tree를 '버블링' 한다.

DOM 이벤트는 `Event.target`을 통해 이벤트가 시작된 element에 대한 유용한 정보를 제공한다. 이를 통해 부모나 부모의 모든 하위 element들이 아닌, 마치 target element가 이벤트를 listening하고 있는 것처럼 부모 element가 동작을 처리할 수 있다. 

이 기법은 두가지 이점이 있다:
- 잠재적으로 수천개 element들의 이벤트를 조절해야하는 것을 하나의 event listener로 처리할 수 있게 됨으로써 성능을 향상시키고 메모리 소비를 줄인다.
- 만약 element들이 부모에 동적으로 추가될 경우, 이 element들에게 새로운 event listener를 등록할 필요가 없다.

```javascript
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
```

위와 같은 방법 대신, Event Delegation을 사용하면 아래와 같이 하위 대상이 원하는 요소와 일치하도록 조건을 넣어서 한 개의 이벤트만 등록한다. 

```javascript
document.addEventListener('click', e => {
    if(e.target.closest('button')){
        handleButtonClick();
    }
});
```

## 알아두면 좋은 것
- event bubbling과 capturing의 차이점

## 참고 링크
- [Event Delegation](https://davidwalsh.name/event-delegate)

## Additional Reference Link
- [event 객체](../Web/18_event_object.md)
