# `+`와 `~` sibling selector들의 차이는 뭘까요?
> This is a translation of 30-Seconds-of-knowledge's [What is the difference between '+' and '~' sibling selectors?.](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/css-sibling-selectors.md) in korean.

일반적인 Sibling Selector인 `~`는 특정 element의 모든 형제 element들을 선택한다. 

아래 예제는 `<div>` element의 모든 형제 element 중에서 `<p>`인 element 들을 선택한다.

```css
div ~ p {
    background-color: blue;
}
```

인접한 Sibling Selector인 `+`는 특정 element에서 인접한 형제 element를 선택한다. 

아래 예제는 `<div>` element 바로 뒤에 있는 `<p>` element들을 선택한다.

```css
div + p {
    background-color: red;
}
```

## 참고 링크
- [W3School's CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)
- [Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

---

## Additonal Description

다시말해 Sibling Element는 같은 depth에 있는 html element를 선택하는 선택자이다. 같은 depth에 있는 element들을 보통 형제라고 칭하고, `~`는 같은 depth에 있는 모든 특정 element를 선택할 때, `+`는 같은 depth에 있는 바로 옆에 있는 특정 element를 선택할 때 사용할 수 있다. (즉, 예제로 보면 div 바로 옆에 p가 있어야 선택되고, 그 사이에 다른 형제가 있을 경우 p는 선택되지 않는다) 

어떤 방식으로 선택되는지 잘 모르겠다면, 아래의 화면 예제를 참고한다. CSS 스타일은 모두 백그라운드로 적용했을 때 혼란의 여지가 있어 아래와 같이 다른 속성을 바꾸도록 했다. 

```css
div + p {
    background-color: yellow;
}

div ~ p {
    font-weight: bold;
}
```

```html
<div>
    <p>
    저는 'div'안에 있는 'p'입니다.
    </p>
</div>
<p>
    저는 'div'옆에 있는 'p'입니다.
</p>
<div>
    <p>
    저는 'div'안에 있는 'p'입니다.
    </p>
</div>
<p>
    저는 'div'옆에 있는 'p'입니다.
</p>
<p>
    저는 'div'옆에 옆에 있는 'p'입니다.
</p>
<p>
    저는 'div'옆에 옆에 옆에 있는 'p'입니다.
</p>
```

![image](https://user-images.githubusercontent.com/42017052/82020816-c3259d00-96c4-11ea-8fb7-78cf5797b48f.png)

이 그림을 통해서 좀 더 이 내용에 대해 확실히 이해했길 바란다. 