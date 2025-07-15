function solution(n) {
    // var answer = [];
    // var str = (n+"").split("");
    // for(let i=str.length-1; i>=0; i--){
    //     answer.push(Number(str[i]));
    // }
    // return answer;
    
    return n.toString().split("").reverse().map(n => n = parseInt(n));
}