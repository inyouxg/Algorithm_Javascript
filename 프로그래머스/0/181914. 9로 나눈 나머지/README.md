# [level 0] 9로 나눈 나머지 - 181914 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181914) 

### 성능 요약

메모리: 39.9 MB, 시간: 5.85 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 26일 11:13:31

### 문제 설명

<p>음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.<br>
이 사실을 이용하여 음이 아닌 정수가 <strong>문자열</strong> <code>number</code>로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>number</code>의 길이 ≤ 100,000</li>
<li><code>number</code>의 원소는 숫자로만 이루어져 있습니다.</li>
<li><code>number</code>는 정수 0이 아니라면 숫자 '0'으로 시작하지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>number</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"123"</td>
<td>6</td>
</tr>
<tr>
<td>"78720646226947352489"</td>
<td>2</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>number</code>는 123으로 각 자리 숫자의 합은 6입니다. 6을 9로 나눈 나머지는 6이고, 실제로 123 = 9 × 13 + 6입니다. 따라서 6을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>number</code>는 78720646226947352489으로 각자리 숫자의 합은 101입니다. 101을 9로 나눈 나머지는 2이고, 실제로 78720646226947352489 = 9 × 8746738469660816943 + 2입니다. 따라서 2를 return 합니다.</li>
</ul>

<hr>

### 학습 노트
<p>javascript 에서는 문자열에 .length()나 .toUpperCase()와 같은 함수를 적용할 수 있다. </p>
<p>원시 데이터 타입을 객체 데이터 타입처럼 사용할 수 있는 것 > 이유 : javascript 엔진이 원시 데이터 타입을 자동으로 래퍼 객체로 임시 변환 시켜준다.</p>
따라서 split으로 문자열을 분리해줄 필요가 없으며, 바로 <code>for (var i of number){ sum += Number(i); }</code> 가 가능하다.

<hr>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
