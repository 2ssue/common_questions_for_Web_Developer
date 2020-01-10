# DFS, BFS를 통한 트리탐색방법 중 본인이 경험(사용)했던 방식은 무엇이고, 동작원리를 짧게 설명해보세요.

DFS와 BFS는 그래프를 탐색하는 데 사용하는 방법으로, 그래프에 어떤 노드들이 있는지 알고 싶을 때 사용한다.  
DFS는 노드의 자식들을 먼저 탐색하고, BFS노드의 형제들을 먼저 탐색한다.  

## DFS(Depth First Search)
DFS는 대부분 `Stack`이나 `Recursion`을 사용해 구현한다.  
![dfs](https://cdn.filepicker.io/api/file/FXAmj6SjTYSMalugzkQw)  
1. A 탐색
2. A의 자식인 X 탐색
3. X의 자식인 G, H를 스택에 넣고 H를 탐색
4. H의 자식인 E, P(G는 이미 들어가있기 때문에 안넣음)를 스택에 넣고 P 탐색
5. P의 자식이 없으므로 E 탐색
6. E의 자식인 M, Y를 넣고 Y 탐색
7. Y의 자식이 없으므로 M 탐색
8. M의 자식인 J 탐색
9. 마지막으로 스택에 남은 G탐색

트리형태가 아니라 그래프형태라 조금 헷갈리지만, 최단 거리로 두고 생각하면 트리와 비슷하다. 최단거리가 같은 형태라면 아무렇게나 부모를 설정해도 되는데, 이 예제에서는 P를 G가 아닌 H의 자식으로 두었기 때문에 그림은 그렇게 표시했다.  
![image](https://user-images.githubusercontent.com/42017052/72154114-1c1db580-33f3-11ea-9d80-76a9beac058d.png)

## BFS(Breadth First Search)
BFS는 대부분 `Queue`를 이용해 구현한다.  
![bfs](https://cdn.filepicker.io/api/file/6sBaBZQVuci45KJTlGQ9)  
1. A 탐색
2. A의 자식인 X 탐색
3. X의 자식인 G 탐색
4. G의 형제인 H 탐색
5. H의 자식인 P 탐색
6. P의 형제인 E 탐색
7. E의 자식인 M 탐색
8. M의 형제인 Y 탐색
9. M의 자식인 J 탐색

## 참조
- [Zerocho_그래프 탐색](https://www.zerocho.com/category/Algorithm/post/5870153c37e1c80018b64eb0)
