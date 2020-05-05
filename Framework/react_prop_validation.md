# React에서 prop 유효성 검사를 적용하는 방법은 무엇일까요?
> This is a translation of 30-Seconds-of-knowledge's [How to apply prop validation in React?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/prop-validation.md) in korean.

React 개발모드에서는 자동으로 component에 등록된 모든 prop들이 올바른 data type을 사용하고 있는지 확인한다. 정확한 data type을 사용하고 있지 않을 경우, React에서는 경고 메시지를 생성해 개발 모드일 경우 콘솔에서 경고를 나타낸다. 이는 성능상으론 좋지 않아서 production 모드에서는 적용되지 않는다. component에 꼭 필요한 prop들은 `isRequired`로 정의한다. 

예를들어, component에 `propTypes`를 아래와 같이 정의할 수 있다:

```javascript
import PropTypes from "prop-types"

class User extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }

    render(){
        return (
            <h1>Welcome, {this.props.name}<h1>
            <h2>Age, {this.props.age}</h2>
        )
    }
}
```

## 알아두면 좋은 것
- 사용자 지정 `propTypes`을 정의할 수 있다.
- `propTypes`는 의무적으로 사용할 필요는 없지만 버그를 줄이는데 많은 도움이 될 수 있다. 

## 참고 링크
- [React Docs_PropTypes와 함께하는 타입 확인](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
