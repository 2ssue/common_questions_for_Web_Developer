(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(e,t,r){"use strict";r.r(t);var i=r(44),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"use-strict-는-무엇을-하고-이것을-사용해서-얻는-이득들은-무엇이-있을까요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-strict-는-무엇을-하고-이것을-사용해서-얻는-이득들은-무엇이-있을까요"}},[e._v("#")]),e._v(" "),r("code",[e._v("'use strict'")]),e._v("는 무엇을 하고, 이것을 사용해서 얻는 이득들은 무엇이 있을까요?")]),e._v(" "),r("blockquote",[r("p",[e._v("This is a translation of 30-Seconds-of-knowledge's "),r("a",{attrs:{href:"https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/use-strict.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("What does 'use strict' do and what are some of the key benefits to using it?"),r("OutboundLink")],1),e._v(" in korean, and contains additional learning contents on this.")])]),e._v(" "),r("p",[e._v("JavaScript 소스 코드 파일 맨 앞에 "),r("code",[e._v("'use strict'")]),e._v("를 사용하면 strict mode가 활성화되어 자바스크립트 코드를 좀 더 엄격하게 구문 분석하고 에러 처리를 할 수 있게 된다. ("),r("code",[e._v("'use strict'")]),e._v("는 함수 단위로도 사용이 가능하다) 이것은 좋은 관행으로 여겨지며, 아래와 같은 꽤 많은 이점이 있다.")]),e._v(" "),r("ul",[r("li",[e._v("자동 오류 제거로 인한 디버깅이 쉬움\n"),r("ul",[r("li",[e._v("none strict mode에서 무시했거나, 자동으로 실패했을 코드에 대한 오류/예외를 발생시켜 코드의 문제를 더 빨리 알린다.")])])]),e._v(" "),r("li",[e._v("변수의 재정의를 허용하지 않음")]),e._v(" "),r("li",[e._v("우발적인 전역 변수를 방지함\n"),r("ul",[r("li",[e._v("strict mode를 사용하지 않을 경우, 변수의 타입을 지정하지 않은 변수에 값을 할당했을 때 해당 이름을 가진 전역 변수가 생성된다. 이는 JavaScript에서 가장 흔한 오류 중 하나이며, strict mode에서는 오류가 발생한다.")])])]),e._v(" "),r("li",[e._v("종종 strict mode가 아닌 mode의 동일한 코드에 비해 성능이 좋음")]),e._v(" "),r("li",[r("code",[e._v("eval()")]),e._v("과 arguments를 단순화함")]),e._v(" "),r("li",[e._v("JavaScript를 좀 더 안전하게 만듦.")])]),e._v(" "),r("h2",{attrs:{id:"알아두면-좋은-것"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#알아두면-좋은-것"}},[e._v("#")]),e._v(" 알아두면 좋은 것")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("this")]),e._v(" 강제 변환을 제거하여 "),r("code",[e._v("null")]),e._v(" 또는 "),r("code",[e._v("undefined")]),e._v(" 값을 참조할 경우 오류가 발생한다.\n"),r("ul",[r("li",[e._v("none strict mode에서 "),r("code",[e._v("null")]),e._v("이나 "),r("code",[e._v("undefined")]),e._v("에 대한 "),r("code",[e._v("this")]),e._v(" 참조는 자동으로 global에 연결된다. 이것은 매우 많은 버그를 유발할 수 있다. strict mode에서는 "),r("code",[e._v("null")]),e._v(" 또는 "),r("code",[e._v("undefined")]),e._v("값에 대해 "),r("code",[e._v("this")]),e._v("로 참조할 경우 오류를 발생시킨다.")])])]),e._v(" "),r("li",[r("code",[e._v("delete")]),e._v("를 잘못 사용할 경우(삭제할 수 없는 프로퍼티 삭제 등) 오류가 발생한다.")]),e._v(" "),r("li",[e._v("향후 버전의 ECMAScript에서 정의될 수 있는 일부 구문을 금지한다.")])]),e._v(" "),r("h2",{attrs:{id:"짧게-답변하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#짧게-답변하기"}},[e._v("#")]),e._v(" 짧게 답변하기")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("use strict")]),e._v("는 JavaScript 1.8.5의 새로운 기능으로, 이전 버전의 JavaScript는 인식할 수 없다.")]),e._v(" "),r("li",[r("code",[e._v("use strict")]),e._v("는 JS 파일이나 함수에서 코드 구문 분석과 오류 처리를 엄격하게 실행한다. 이것은 많은 이점을 가지고 있고, 이 기능을 사용하는 것은 좋지만 이를 지원하지 않는 브라우저에서도 잘 동작하는지(ex. Under Internet Explorer v10) 충분한 테스트가 필요하다.")]),e._v(" "),r("li",[e._v("이 기능은 모든 modern browser에서 지원하고 있다.")])]),e._v(" "),r("h2",{attrs:{id:"참고-링크"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고-링크"}},[e._v("#")]),e._v(" 참고 링크")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN_strict mode"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://developer-interview.com/p/javascript/what-are-the-benefits-of-including-use-strict-at-the-beginning-of-a-javascript-source-file-29",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are the benefits of including 'use strict' at the beginning of a JavaScript source file?"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);