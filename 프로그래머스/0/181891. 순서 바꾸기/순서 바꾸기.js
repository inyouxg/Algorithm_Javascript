function solution(num_list, n) {
    var arr1 = num_list.slice(n,num_list.length+1);
    var arr2 = num_list.slice(0,n);
    var answer = [...arr1,...arr2];
    return answer;
}

/*
function solution(num_list, n){
    return num_list.slice(n).concat(num_list.slice(0,n));
}

처음에는 slice한 값을 answer 배열에 push -> 배열 안에 배열이 들어가므로 오답.
concat이나 위처럼 spread 사용으로 값을 넣어야 한다.
*/