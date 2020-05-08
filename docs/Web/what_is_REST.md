# REST란 무엇인가요?
> 30-Seconds-of-knowledge의 [What is event-driven programming?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/rest.md)를 번역한 글입니다.

REST(REpresentational State Transfer)는 네트워크 구조를 위한 소프트웨어 디자인 패턴이다. RESTful한 웹 어플리케이션은 자원에 대한 정보를 데이터 형태로 나타낸다.

일반적으로 이 컨셉은 웹 어플리케이션에서 상태를 관리하기 위해 사용한다. 대부분의 어플리케이션에는 데이터를 생성하고(CREATE), 읽고(READ), 갱신하고(UPDATE), 지우는(DELETE, DESTROY) 일반적인 형식이 있다. 데이터가 `posts`, `users`, `comments`와 같은 분리된 테이블에 나눠져 저장된다고 할 때, RESTful API는 아래와 같은 것을 이용해 데이터에 접근한다는 것을 표현한다.

- 자원의 식별자(Identifier for the resource). 자원의 endpoint 또는 URL이라고 한다.
- 서버 작업은 자원에 대해 [HTTP method](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)형태나 동사 형태로 수행되어야 한다. 일반적인 HTTP method는 `GET`, `POST`, `PUT`, `DELETE`이다. 
> _The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE._ 
>
> 여기서 말하는 동사는 URL쪽을 의미하는 것이 아니라 Method 쪽을 의미하는 것이다. RESTful API는 URL에 동사를 허용하지 않는다.

아래는 `posts` 자원에 대해 HTTP method를 사용한 URL 예시이다.

- READ: `GET /posts/`
- CREATE: `POST /posts/new`
- UPDATE: `PUT /posts/:id`
- DELETE(DESTROY): `DELETE /posts/:id`

## 알아두면 좋은 것
- 이 패턴의 대안, [GraphQL](https://graphql-kr.github.io/)
> RESTful API는 각자가 이해하고 있는 것이 다르기 때문에 사람마다 다른 API 의견을 내기도 하고, API를 통합하는 데 시간이 많이 걸린다는 단점이 있다. 

## 참고 링크
- [What is REST — A Simple Explanation for Beginners, Part 1: Introduction](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
- [TOAST Meetup!_REST API 제대로 알고 사용하기](https://meetup.toast.com/posts/92)
- [NAVER D2_그런 REST API로 괜찮은가](https://www.youtube.com/watch?v=RP_f5dMoHFc)