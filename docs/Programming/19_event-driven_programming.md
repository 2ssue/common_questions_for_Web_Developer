# 이벤트 기반 프로그래밍이 무엇인가요?
> 30-Seconds-of-knowledge의 [What is event-driven programming?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/event-driven-programming.md)를 번역한 글입니다.

이벤트 기반 프로그래밍은 이벤트를 송수신하는 어플리케이션을 구축하는 패러다임이다. 프로그램이 이벤트를 보내면, 프로그램은 해당 이벤트와 상황에 등록된 콜백 함수를 실행해서 관련된 데이터를 전달해 응답한다. 이 패턴으로, 이벤트는 어떤 함수를 구독(subscribe)하지 않아도 에러없이 이벤트를 보낼 수 있다. 

일반적인 예제는 마우스 입력, 클릭과 같은 DOM 이벤트를 listening하는 패턴으로, 이벤트가 발생했을 때 callback이 실행된다.

```javascript
document.addEventListener("click", function(event) {
  // This callback function is run when the user
  // clicks on the document.
})
```

DOM 컨텍스트가 없는 패턴은 아래와 같을 것이다. 

```javascript
const hub = createEventHub()
hub.on("message", function(data) {
  console.log(`${data.username} said ${data.text}`)
})
hub.emit("message", {
  username: "John",
  text: "Hello?"
})
```

여기서 `on`은 이벤트를 구독하는 방식이고, `emit`은 이벤트를 보내는 방식이다. 

### 이 질문을 받았을 때 보여주면 좋은 것
- publish-subcribe 패턴
- 이벤트를 구독한 콜백 함수를 실행시켜서 이벤트에 응답하는 방식. 
- Javascript를 통해 간단한 pub-sub 코드를 만들어서 보여주는 것.

