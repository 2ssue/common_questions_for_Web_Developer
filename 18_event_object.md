# event 객체에 대해서 설명해보세요.

사용자 또는 API에 의해 생성된 DOM과 관련된 이벤트를 나타낸다. 예를 들어 사용자가 웹 페이지에서 단추를 클릭하면 발생하는 것이 해당 단추 Element에 대한 click 이벤트이다. 

이벤트 핸들러는 보통 `EventTarget.addEventListener()`를 사용해 다양한 HTML 엘리먼트에 연결할 수 있다. 동일한 이벤트에 대해서도 하나의 엘리먼트가 여러 개의 핸들러를 가질 수 있다는 것에 유의해야한다.  
> 아래와 같은 경우 모두 처리 된다는 뜻.
> ```javascript
> SomeDOMElement.addEventListener('click', () => console.log('hello '));
> SomeDOMElement.addEventListener('click', () => console.log('world'));
> SomeDOMElement.click(); // hello world
> ```

## 참고
### Event의 처리 순서
여러 개의 Element로 감싸져있는 한 Element를 클릭했을 때, 이벤트는 어떤 순서로 처리될까? 브라우저가 Event를 감지하는 방식에는 Bubbling 방식과 Capturing 방식이 있다. Element의 최하위에서 상위로, 상위에서 하위로 Event를 전달하는 방식이다. 

#### Event Bubbling
기본으로 동작하는 방식이다. Element의 최하위에서 상위로 Event를 전달한다. 
![bubbling](https://joshua1988.github.io/images/posts/web/javascript/event/event-bubble.png)

Bubbling 방식인 경우 아래와 같은 코드가 있을 때, third 영역을 클릭하면 third > second > first 가 출력된다.

```html
<body>
  <div class='first'>
    first
    <div class='second'>
      second
      <div class='third'>
        third
      </div>
    </div>
  </div>
  <script type='text/javascript'>
    document.querySelectorAll('div').forEach((div) => {
      div.addEventListener('click', (e) => console.log(e.currentTarget.className));
    });
  </script>
</body>
```

클릭한 영역은 third 영역 뿐이지만, third가 second에, second가 first에 감싸져있기 때문에 이 이벤트를 상위로 계속해서 전달해 이벤트가 발생했다는 것을 알린다. 이러한 동작은 각 div에 이벤트 등록이 되어있기 때문에 확인이 가능한 것이고, 만약 `third` class에만 이벤트를 등록했다면 third만 출력한다. 

#### Event Capturing
Capturing 방식은 Bubbling과 반대로 동작한다. 동작을 위해 별도의 처리가 필요하다. 
![Capturing](https://joshua1988.github.io/images/posts/web/javascript/event/event-capture.png)

위와 같은 예시 코드가 있을 때 first > second> third 순으로 출력된다. 다만 Capturing 방식은 이벤트 등록 방법이 조금 다른데, 방식은 아래와 같다.  
```javascript
document.querySelectorAll('div').forEach((div) => {
  div.addEventListener('click', (e) => console.log(e.currentTarget.className));
}, { 
  capture: true, // default 값이 false (bubbling 방식).
});
```

#### stopPropagation

이벤트가 상위, 하위 Element로 전달되는 것을 원하지 않는 경우 이벤트의 전달을 멈추게 할 수도 있다. 흔히 `event.stopPropagation()`을 사용해 다음 Element에 이벤트가 전달되는 것을 막곤 하는데, 이 방식은 예상하지 못한 이벤트까지 차단할 수 있고, DOM의 정상적인 이벤트 흐름을 방해하기 때문에 별로 좋지 않은 방법이다. 
> cf) [stopPropagation에 대한 코드리뷰](https://github.com/connect-foundation/2019-07/pull/145), [The Dangers of Stopping Event Propagation](https://css-tricks.com/dangers-stopping-event-propagation/)

때문에 이벤트의 전달 자체를 막는 `event.stopPropagation()` 방식보다는, 이벤트는 전달하되 동작을 막도록 했는지 확인하는 절차를 거쳐서 이벤트가 수행되지 않도록 할 수 있다. 위의 예시 html 코드에서 script 코드를 아래와 같이 변경할 경우, third 영역을 클릭했을 때 second와 first는 출력되지 않게 된다. 

```javascript
document.querySelectorAll('div').forEach((div) => {
  div.addEventListener('click', (e) => {
    if (e && e.defaultPrevented) return;
    console.log(e.currentTarget.className);
  });
});
document.querySelector('.third').addEventListener('click', (e) => {
  e.preventDefault();
});
```

> cf) [stopPropagation 리팩토링](https://github.com/connect-foundation/2019-07/pull/233/commits/832243f423fceb15d712c6dcc95c2127c22cf8d9)

## 참조
- [MDN_Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN_event](https://developer.mozilla.org/ko/docs/Web/API/Event)
- [MDN_이벤트 참조(이벤트 종류)](https://developer.mozilla.org/ko/docs/Web/Events)
- [joshua 블로그_이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임까지](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
