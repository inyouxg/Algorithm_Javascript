function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i++){
        n%i === 0 ? answer.push(i) : "";
    }
    if(n == 0) return n;
    return answer.reduce((arr, cur) => arr + cur);
}