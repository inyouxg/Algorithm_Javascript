function solution(arr, divisor) {
    var answer = [];
    arr.forEach((element) => {
        element % divisor === 0 ? answer.push(element) : "";
    })
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
}

//answer = []일 때, answer === [] ? < 무조건 false만 나온다.
//이유는 배열마다 참조값이 다르기 때문이다. length로 비교하면 원하는 결과가 나온다.
//filter 함수를 사용하면 조건에 맞는 값만 남겨서 새 배열을 만들어준다. 더 간단하게 작성 가능.