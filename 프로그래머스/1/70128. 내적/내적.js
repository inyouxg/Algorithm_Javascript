function solution(a, b) {
    var length = a.length;
    var answer = 0;
    for(let i=0; i<length; i++){
        answer += a[i] * b[i];
    }
    return answer;
}