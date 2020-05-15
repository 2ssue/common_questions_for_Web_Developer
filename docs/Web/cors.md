# CORS란 무엇인가요?
> This is a translation of 30-Seconds-of-knowledge's [What is CORS?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/cors.md) in korean, and contains additional learning contents on this. 

`Cross-Origin Resource Sharing, CORS`(다른 출처간 자원 공유)는 웹 사이트와 출처가 다른 서버에서 자원에 접근할 수 있는 브라우저 권한을 부여하기 위해 추가적인 HTTP 헤더를 사용하는 메커니즘이다. 

예를 들자면 `http://mydomain.com` 웹 어플리케이션에서 AJAX를 이용해 `http://yourdomain.com`로 요청을 보내는 것이 Cross-Origin 요청이다.

브라우저는 보안상의 이유로 자바스크립트가 출처가 다른 곳으로 HTTP 요청을 보내는 것을 제한한다. `XMLHttpRequest`와 `fetch`는 동일 출처(same-origin) 정책을 따르고 있어서, 이 API를 사용하는 경우 출처가 다른 곳으로부터 받은 응답에는 올바른 CORS 헤더가 있어야 한다. 그렇지 않으면 출처가 같은 애플리케이션의 HTTP 자원만 요청할 수 있다.

## 알아두면 좋은 것
- CORS의 동작은 오류가 아니라 유저들을 보호하기 위한 보안 메커니즘이다.
- CORS는 사용자가 실수로 방문할 수 있는 악성 웹사이트에서 합법적인 웹 사이트로 유저의 데이터를 요청하거나 유저가 의도하지 않은 동작을 수행하는 요청을 방지하기 위해 고안되었다. 

## 참고 링크
- [MDN_CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Additional Link
- [CORS(Cross-Origin Resource Sharing)에 대해 알아보자](https://2ssue.github.io/base/cors/)