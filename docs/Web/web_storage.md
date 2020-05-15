# HTML5 Web Storage란 무엇일까요? `localStorage`와 `sessionStorage`에 대해서 설명해보세요.
> This is a translation of 30-Seconds-of-knowledge's [https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/html5-web-storage.md](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/html5-web-storage.md) in korean.

HTML5에서, Web Page들은 유저의 브라우저(=로컬)에 데이터를 저장할 수 있게 되었다. 데이터는 이름/값 쌍으로 저장되고, Web Page는 자신이 저장한 데이터에만 접근할 수 있다. 

## `localStorage`와 `sessionStorage`에서 데이터의 수명과 관련한 차이점: 
- `localStorage`를 통해 저장된 데이터는 영구적으로 저장된다. 여기에 저장된 데이터들은 Web App이 그 데이터들을 삭제하거나, 유저가 브라우저에서 삭제하지 않는 이상 유저의 컴퓨터에서 삭제되지 않고 유지된다.
- `sessionStorage`는 데이터가 저장된 최상위 창 또는 브라우저의 탭과 수명이 동일하다. Tab이 완전히 닫힐 경우, `sessionStorage`에 저장된 모든 데이터는 삭제된다. 

## `localStorage`와 `sessionStorage`의 저장 범위에 대한 차이점:

두 형태의 저장소는 문서의 출처로 범위가 지정되기 때문에, 출처가 다른 문서들과 저장된 데이터들을 절대 공유하지 않는다.

- `sessionStorage`는 각 창 단위로 범위가 지정된다. 출처가 같은 문서의 두 개의 브라우저 탭은 각각의 분리된 `sessionStorage`의 데이터를 갖는다.
- `localStorage`와는 다르게, 같은 출처의 같은 스크립트는 열린 탭이 다를 경우, 각자의 `sessionStorage`에 접근할 수 없다.

## 알아두면 좋은 것 
- 이전에는 쿠키로 이용했다.
- Storage의 저장 한도는 쿠키를 사용하는 것보다 훨씬 크고(최소 5MB 이상) 속도가 빠르다.
- 데이터는 서버로 전송되지 않고, 클라이언트가 특별히 요청하는 경우에만 사용할 수 있다. 

## 참고 링크
- [W3Schools - HTML5 WebStorage](https://www.w3schools.com/html/html5_webstorage.asp)