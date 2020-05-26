# DOM이 뭘까요?
> This is a translation of 30-Seconds-of-knowledge's [What is the DOM?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/dom.md) in korean.

DOM(Document Object Model)은 HTML과 XML 문서를 Node 트리 구조로 해석하는 크로스 플랫폼 API이다. 이런 Node(element나 text)들은 프로그래밍으로 조작할 수 있는 객체이며, 눈에 보이는 변경 사항들을 실시간으로 문서에 반영한다. 브라우저에서 이 API는 JavaScript로 DOM Node를 조작해 문서의 스타일, 내용, 배치를 변경하거나 Event Listener를 통해 상호 작용할 수 있다. 

## 알아두면 좋은 것
- DOM은 어떤 프로그래밍 언어와도 독립되어 동작하도록 설계되었으며, 문서의 구조적인 표현을 일관된 단일 API로 제공한다. 
- DOM은 페이지가 로드될 때 브라우저에서 점진적으로 구성되기 때문에 Script는 대부분 페이지의 하단, `defer` 속성이 있는 `<head>`에 배치하거나, `DOMContentLoaded` Event Listener 안에 배치하는 경우가 많다. DOM node를 조작하는 Script는 반드시 DOM 구조가 다 만들어진 이후에 실행해야 오류를 피할 수 있다.
- `document.getElementById()`와 `document.querySelector()`는 DOM node를 가져오기 위한 일반적인 방법이다.
- `innerHTML` 속성에 새로운 값을 넣으면 HTML parser로 문자열이 실행되어 동적으로 HTML content를 node에 쉽게 추가할 수 있다. 

::: warning
`innerHTML`를 활용해 새로운 값을 넣는 것은 String으로 node를 추가하기 위한 가장 쉬운 방법이지만, 만약 사용자의 입력을 그대로 이 속성에 넣는 작업을 한다면 피하는 것이 좋다. 사용자가 Script를 입력했다면, HTML parser가 이를 해석해 Script를 실행하기 때문이다. 이에 대한 자세한 내용은 [XSS](./xss.md)를 참고하면 좋다. 
:::

## 참고 링크
- [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

## Additional Reference Link
- [브라우저의 렌더링 과정](./1_browser_rendering.md)
- [XSS](./xss.md)