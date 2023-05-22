### Selection sort
#### Abstract
- Selection Sort는 Bubble Sort과 유사한 알고리즘으로, 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘이다.
- Selection Sort는 배열에서 해당 자리를 선택하고 그 자리에 오는 값을 찾는 것이다.

#### Process
1. 주어진 배열 중에 최소값을 찾는다.
에 2회전에서는 맨 끝에있는 원소의 정렬은 제외된다.

#### Code
코드는 bubble_sort.js 파일을 참고하면된다.

#### GIF로 이해하는 버블 정렬
https://raw.githubusercontent.com/GimunLee/tech-refrigerator/master/Algorithm/resources/bubble-sort-001.gif

#### 시간 복잡도 & 공간 복잡도
 - 시간복잡도
    - Bubble Sort는 정렬이 돼있던 안돼있던, 2개의 원소를 비교하기 때문에 최선, 평균, 최악의 경우 모두 시간복잡도가 O(n^2) 으로 동일
 - 공간 복잡도
   - 주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 O(n) 이다.

#### 장단점

- 장점
  - 구현이 매우 간단하고 소스코드가 직관적이다.
  - 정해진 배열 내부에서 교환하는 형식이라 다른 메모리가 필요하지 않다. (제자리 정렬)
  - 안정 정렬이다. 
    - 안정정렬이란 중복된 값의 경우 입력 순서와 동일하게 유지해서 정렬을 하는것을 말함.
- 단점
  - 시간복잡도가 최악으로 비효율적이다.
  - 정렬되지 않은 원소들이 정렬하기 위해서 많은 교환연산이 필요하다.(swap)

출처 : https://gyoogle.dev/blog/algorithm/Bubble%20Sort.html