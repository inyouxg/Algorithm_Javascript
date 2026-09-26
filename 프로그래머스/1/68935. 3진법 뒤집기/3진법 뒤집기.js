function solution(n) {
    var ternary = [];
    var answer = [];
    //3진법 변환
    let i=0;
    while(n != 0){
        ternary.push(n%3);
        n = Math.floor(n / 3);
    }
    answer = ternary.map((ele,index) => ele * 3 ** (ternary.length - (index+1)));
    console.log(answer);
    return answer.reduce((acc,cur) => acc + cur, 0);
    
}