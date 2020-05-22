# React, Vue, Angular, Hyperapp과 같은 JavaScript UI 라이브러리/프레임워크의 목적은 무엇일까요? 
> This is a translation of 30-Seconds-of-knowledge's [What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/ui-library-framework-purpose.md) in korean.

주된 목적은 DOM을 직접 조작하는 것을 피하고, application의 상태를 UI와 쉽게 연동하는 것이다. 그리고 (유사한 기능과 적은 차이점을 가지고 있을 때) 재사용할 수 있는 컴포넌트를 제공한다. 이를 사용하면 여러 곳에서 재사용되는 중복되는 구조를 매번 변경하지 않아도 된다. 

jQuery와 같은 DOM 조작 라이브러리를 사용하면 일반적으로 application의 데이터는 대개 class 이름이나 데이터 속성으로, DOM에 보관된다. UI를 업데이트 하기 위해 DOM을 조작하면 불필요한 단계가 생기고, 시간이 지날수록 부가적인 버그들이 생길 수 있다. 상태를 분리하고, 상태가 변경될 때 프레임워크에 UI 변경을 맡기면 인지적인 부하를 줄일 수 있다. UI가 특정 상태값에 따라 다르게 보이도록 하길 원한다면, 상태에 따라 UI를 수동으로 업데이트하는 명령적인 방식 대신 선언적인 방식을 사용하는 것이 좋다.

## 알아두면 좋은 것
- 가상 DOM은 실제 DOM 트리를 일반 객체의 형태로 표현한 것으로, 라이브러리에선 변경될 때마다 전체 document를 버리고 다시 만드는 것처럼 코드를 작성하지만 이를 통해 변경되는 상태만 실제 DOM에 업데이트한다. 가상 DOM 객체의 이전과 현재를 비교해 가상 DOM을 다시 계산하는 것이 실제 DOM node를 변경하는 것보다 훨씬 효율적이다. 
- JSX는 XML 같은 구문을 제공하는 JavaScript의 확장으로, 트랜스파일러에 의해서 function call로 변환되는 가상 DOM 오브젝트를 생성한다. 

## 참고 링크
- [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)