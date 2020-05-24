# closure와 스코프 관계를 설명해보세요

## 요약
클로저는 비공개 변수를 가질 수 있는 환경에 있는 함수를 말한다.  

비공개 변수란, 클로저 함수의 매개변수도 아니고 클로저 함수 내부에서 생성한 변수도 아닌 것을 말하는데, 
아래 예제를 통해 간단하게 살펴보자면 makeClosure가 return 하는 `function() { console.log(name) }`이 name 변수나 name 변수가 있는 
스코프에 대해 클로저라고 불려질 수 있다.  

```javascript
const makeClosure = function(){
  const name = 'zero';
  return function (){
    console.log(name);
  }
};
const closure = makeClosure();
closure();
```

즉, 실행 스택과 관련 없는 스코프의 변수(비공개 변수)를 scope chain에 의해 사용할 수 있게 된 형태를 말한다. 
(실제로 이 함수가 호출됐을 때 makeClosure는 실행 스택에서 없어진 상태지만 makeClosure의 return function()이 선언됐을 때 
lexical scoping에 의해 정해진 scope chain은 makeClosure와 전역 변수객체이기 때문에 이 scope의 변수를 이용할 수 있게 됨.)

클로저는 사용자를 통제하기 위해 사용하는데, 잘못 사용할 경우 메모리 낭비가 발생할 수 있으며, scope chain을 거슬러 올라가며 동작하기 때문에 성능 문제가 있을 수 있다.  

## Scope (스코프)

ES5의 스코프는 함수 레벨 스코프까지 지원해왔다. Javascript에서 `var` 키워드로 선언된 변수나, 함수 선언식으로 만들어진 함수는 함수 레벨의 스코프를 갖는다.
즉, 함수 내부 전체에서 유효한 식별자가 되어 아래 코드에서 결과는 `blue`가 된다.  

```javascript
function foo(){
  if (true){
    var color = 'blue';
  }
  console.log(color); //blue
}
```

만약 함수 레벨 스코프가 아니라 블록 레벨 스코프였다면, `color` 변수는 if 절에서 없어지고, console.log에서는 참조 에러가 발생할 것이다.   

```javascript
function foo() {
    if(true) {
        let color = 'blue';
        console.log(color); // blue
    }
    console.log(color); // ReferenceError: color is not defined
}
```

ES6부터는 블록 레벨의 스코프를 지원해, 위와 같이 `let`, `const` 키워드를 통해 블록 레벨 스코프의 사용이 가능해졌다.  

### Lexical scoping

스코프는 함수를 호출할 때가 아니라, **선언할 때** 생긴다. 그래서 렉시컬 스코핑이 아닌, 정적 스코프라고도 불린다.  
이 말이 조금 이해가 안가긴 하지만, 함수를 선언할 때 함수 내부의 변수들은 현재 자신의 스코프에서 가장 가까운 곳의 변수를 참조한다는 뜻이다.  
  
따라서 아래와 같은 코드에서 모두 `name`을 출력시킨다고 할 때, 아래와 같은 결과가 나올 수 있는 것이다.  
자세한 내용은 아래의 [Execution Context](/#Execution-Context)를 참고해보면 훨씬 더 쉽게 이해할 수 있다.  

```javascript
var name = 'tester';

function log(name) {
  console.log(name);
}
function foo() {
  log(name);
}

function fee() {
  var name = 'fee';
  log(name);
}

foo(); // tester
fee(); // fee
```

## 참고
### Execution Context
코드가 실행되기 위해 생성되는 환경. 코드를 처음 실행시키면, 모든 것을 포함하는 전역 Context가 생긴다. 모든 것을 관리하는 환경으로 페이지가 종료될 때까지 유지된다.  
전역 Context 외에도 함수 Context가 있는데, 이는 함수를 호출할 때마다 하나씩 생긴다.  
  
#### Context 원칙
- 전역 Context를 하나 생성하고, 함수 호출 시마다 Context가 생긴다.
- Context가 생성될 땐 Context 안에 변수객체(arguments, variable), scope chain, this가 생성된다.
- Context 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고 없으면 Scope chain을 따라 올라가서 찾는다.
- 함수 실행이 끝나면 해당 Context는 Closure를 제외하고 삭제된다. 페이지가 종료되면 전역 Context가 삭제된다. 

아래 예시를 통해 이해해보자.

```javascript
var name = 'zero';
function wow(word){
  console.log(word + ' ' + name);
}
function say(){
  var name = 'nero';
  console.log(name);
  wow('hello');
}
say(); // nero \n hello zero
```

1. 위 코드가 실행되면서 전역 Context가 생기면서 호이스팅되어 wow와 say에 함수가 대입된 이후, 실행되어 name에 zero가 초기화 된다.
  ```javascript
  globalContext:{
    변수객체:{
      arguments: null, // 전역 Context의 경우 함수가 아니기 때문에 인자가 없음
      variable: [{name: 'zero'} , {wow: Function}, {say: Function}],
    },
    scopeChain: ['global 변수객체'],
    this: window, // 따로 바인딩 된 값이 없으면 window가 default
  }
  ```
2. `say()`가 호출되면서 say 함수 Context가 생긴다. 
  ```javascript
  sayFuncContext:{
    변수객체:{
      arguments: null,
      variable: ['name'],
    },
    scopeChain: ['say 변수객체', 'global 변수객체'], 
    this: window,
  }
  ```
3. `say()`가 실행된다.
    1. variable의 name이 `{name: 'nero'}`로 변경
    2. console.log(name)의 name을 찾기 위해 Context를 추적
    3. 변수객체의 variable에서 name을 찾았으므로 nero 출력
    4. `wow()`에서 wow를 찾기 위해 Context를 추적
    5. 변수객체에서 찾을 수 없으므로 scopeChain을 올라가 global 변수객체를 탐색
    6. global 변수 객체의 variable에서 `wow`를 찾아 호출
4. `wow('hello')`가 호출되면서 wow 함수 Context가 생긴다.
  ```javascript
  wowFuncContext:{
    변수객체:{
      arguments: [{word: 'hello'}],
      variable: null,
    },
    scopeChain: ['wow 변수객체', 'global 변수객체'], 
    // 여기서 wow의 다음 scopeChain이 say가 아닌 것에 주의. lexical scoping에 의해 실행 시 가장 가까운 스코프가 아니라, 선언 시 가장 가까운 스코프가 지정되므로 say가 아니라 global이 다음 scope가 된다.  
    this: window,
  }
  ```
5. `wow('hello')`가 실행된다.
    1. `console.log(word + ' ' + name)`을 실행하기 위해 Context 추적
    2. 변수객체의 arguments에서 word를 찾았으므로 word에 hello 대입
    3. name은 변수객체에 담겨있지 않으므로, scopeChain에서 다음 변수객체인 global 변수객체를 추적
    4. global 변수 객체의 variable에서 name을 찾았으므로 해당 값인 zero를 대입, 출력(hello zero)

### 호이스팅
변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상. Context가 생성되고 해당 scope가 실행되기 전에 이뤄진다. 함수 표현식(`const a = function(){...}`)이 아닌 함수 선언식(`function a(){...}`)일 때는 식이 통째로 끌어올려진다.  

따라서 아래와 같은 코드가 있을 때, sayWow는 호이스팅 되어 정상 실행되지만 sayYeah는 Context에 아직 대입되기 전이기 때문에 에러가 발생한다.  

```javascript
sayWow();
sayYeah();

const sayYeah = function(){
  console.log('yeah');
}

function sayWow(){
  console.log('wow');
}
```

## 참조
- [자바스크립트의 스코프와 클로저](https://meetup.toast.com/posts/86)
- [What is lexical scope?_Stack overflow](https://stackoverflow.com/questions/1047454/what-is-lexical-scope)
- [ZeroCho_실행 컨텍스트](https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0)
