# JavaScript에서 expression과 statement는 어떤 차이가 있을까요? 
> This is a translation of 30-Seconds-of-knowledge's [What is the difference between an expression and a statement in JavaScript?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/expression-vs-statement.md) in korean.

자바스크립트에는 expression과 statement라는 두가지 주요 구문 카테고리가 있다. 세번째는 이 둘을 합친 것으로, expression statement라고 일컫는다. 간단하게 요약해보자면 아래와 같다:
- **Expression**: 값을 생성한다.
- **Statement**: action을 수행한다.
- **EXpression statement**: 값을 생성하고 action을 수행한다.

일반적으로 아래와 같이 용어를 정의한다:
> 만약 변수에 값을 할당하거나 그 값을 출력할 수 있다면 expression이고, 그렇지 않다면 statement이다. 

### Statements
```javascript
let x = 0;

function declaration(){}

if(true){

}
```

Statement는 어떤 동작을 하는 명령을 나타내고, 값을 생성하지는 않는다.

```javascript
var x;
if(y >= 0){
    x = y;
}else{
    x = -y;
}
```
위의 코드에서 Expression은 `y >= 0` 하나로, `true`나 `false` 값을 생성한다. 이 외의 코드는 새로운 값을 생성하지 않는다.

### Expressions

Expression은 값을 생성한다. 인터프리터가 계산된 결과로 대체하여 값을 전달하기 때문에 값이 함수로 전달될 수 있다. 

```javascript
5 + 5 // > 10
lastCharacter("input"); // > "t"
true === true // > true
```

### Expression statements

아래는 삼항 연산자 Expression을 사용해 이전에 사용했던 [Statements 파트](#statements)의 두번째 예시 코드와 동일한 역할을 하는 코드이다: 

```javascript
// `y`의 절댓값을 `x`에 할당
var x = y >= 0 ? y : -y
```

이는 변수 `x`를 평가(Expression)하여 선언(Statement)하기 때문에 Expression이기도 하고 Statement이기도 하다.

## 알아두면 좋은 것
- 함수 선언식(Declaration) vs 함수 표현식(Expression)

## 참고 링크
- [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

## Additional Description
### 함수 선언식
다른 프로그래밍 언어에서도 사용하는 일반적인 함수식
```javascript
function name() {
    //do something...
}
```

### 함수 표현식
자바스크립트에서 사용할 수 있는 또다른 함수 선언 방법
```javascript
const name = function() {
    //do something...
}
```

::: tip
함수 선언식은 호이스팅에 영향을 받아서 선언 전에 사용할 수 있지만, 함수 표현식은 호이스팅에 영향을 받지 않아서 선언하기 전에 사용할 수 없다. 자세한 내용은 [호이스팅](./hoisting.md)을 참고하면 좋다. 
:::
