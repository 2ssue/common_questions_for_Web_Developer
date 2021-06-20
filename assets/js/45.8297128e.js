(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{401:function(t,e,r){"use strict";r.r(e);var a=r(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"브라우저-렌더링-동작과정을-짧게-설명해보세요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-렌더링-동작과정을-짧게-설명해보세요"}},[t._v("#")]),t._v(" 브라우저 렌더링 동작과정을 짧게 설명해보세요.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("요약")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("HTML 파싱(DOM 트리), CSS 파싱(스타일 구조체)\n                  ↓\n            렌더 트리 생성\n                  ↓\n           렌더링 위치 계산\n                  ↓\n                페인트\n                  ↓\n              렌더링 끝!\n")])])])]),t._v(" "),r("p",[t._v("브라우저는 렌더링 엔진을 통해 렌더링 과정을 거치며, 아래 동작을 순차적으로 수행해 렌더링을 마친다.")]),t._v(" "),r("p",[t._v("렌더링 엔진은 HTML 문서를 파싱해 DOM 노드로 변환하여 태그 트리로 이뤄진 DOM 트리를 구축한다. 이와 동시에 참조된 CSS 파일을 포함한 스타일 요소를 파싱하는데, 스타일 요소는 브라우저 기본 스타일, 사용자 정의 스타일, HTML 내부 style 속성 순으로 파싱되어 적용되며 스타일 구조체를 생성한다.\n이러한 스타일 정보(스타일 구조체)와 HTML 표시(DOM 트리)를 통해 '렌더 트리'라는 새로운 트리를 생성한다.")]),t._v(" "),r("p",[t._v("렌더 트리는 DOM과는 다르게 각 노드에 스타일 정보가 저장되어있고, 화면에 표현되는 노드로 구성된다. 즉, "),r("code",[t._v("display:none")]),t._v("인 경우는 렌더 트리에 포함되지 않는다.")]),t._v(" "),r("blockquote",[r("p",[t._v("렌더 트리는 화면에 표현되는 노드로만 구성되기 때문에 "),r("code",[t._v("<head>")]),t._v(", "),r("code",[t._v("<title>")]),t._v(", "),r("code",[t._v("<script>")]),t._v(" 등은 포함되지 않는 요소이다.")])]),t._v(" "),r("p",[t._v("렌더 트리의 생성이 끝나면 시각적 속성을 저장하고 있는 스타일 요소에 맞게 화면에 배치하기 위해 위치를 계산하고, 렌더링 엔진은 요소의 표현 위치를 알게 되었으므로 렌더 트리를 순회하면서 화면에 그려서(Paint) 최초 렌더링을 마친다.")]),t._v(" "),r("p",[t._v("이후 비동기 통신 등으로 인해 DOM 구조가 변경되는 작업은 리플로(Reflow, 배치를 다시 하는 작업) 또는 리페인트(Repaint, 단순한 스타일 변경 작업)라고 한다.")]),t._v(" "),r("br"),t._v(" "),r("p",[r("em",[t._v("cf) 렌더링 엔진은 좀 더 나은 사용자 경험(UX)를 위해 가능하면 빠르게 내용을 표시하는데, 모든 HTML을 파싱할 때까지 기다리지 않고 배치와 그리기를 시작한다.\n네트워크로부터 나머지 내용이 전송되길 기다리는 동시에, 받은 내용의 일부를 먼저 화면에 표시하는 것이다.")])]),t._v(" "),r("h2",{attrs:{id:"더보기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#더보기"}},[t._v("#")]),t._v(" 더보기")]),t._v(" "),r("h3",{attrs:{id:"참고-자료"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" 참고 자료")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://d2.naver.com/helloworld/59361",target:"_blank",rel:"noopener noreferrer"}},[t._v("Naver D2_브라우저는 어떻게 동작하는가"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://12bme.tistory.com/140",target:"_blank",rel:"noopener noreferrer"}},[t._v("브라우저 렌더링"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);