# CORS란 무엇인가요?
> This is a translation of 30-Seconds-of-knowledge's [What is CORS?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/cors.md) in korean, and contains additional learning contents on this. 

다른 출처간 자원 공유(`Cross-Origin Resource Sharing, CORS`)는 웹 사이트와 출처가 다른 서버에서 자원에 접근할 수 있는 브라우저 권한을 부여하기 위해 추가적인 HTTP 헤더를 사용하는 메커니즘이다. 

Cross-Origin 요청에 대한 예로 `http://mydomain.com` 웹 어플리케이션에서 AJAX로 `http://yourdomain.com`에 요청을 보내는 것이 있다. 

보안상의 이유로, 브라우저는 자바스크립트가 보낸 출처가 다른 HTTP 요청을 제한한다. `XMLHttpRequest`와 `fetch`는 동일 출처(same-origin) 정책을 따른다. 즉, 이 API들을 사용하는 웹 애플리케이션은 다른 출처에서 온 응답에 올바른 CORS 헤더가 포함되어있지 않은 경우, 같은 출처를 가진 애플리케이션으로만 HTTP 자원을 요청할 수 있다.

## 알아두면 좋은 것
- CORS의 동작은 오류가 아니라 유저들을 보호하기 위한 보안 메커니즘이다.
- CORS는 사용자가 실수로 방문할 수 있는 악성 웹사이트에서 합법적인 웹 사이트로 유저의 데이터를 읽거나 유저가 의도하지 않은 동작을 수행하는 요청을 하지 못하도록 방지하기 위해 고안되었다. 

## 참고 링크
- [MDN_CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)