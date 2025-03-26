function solution(number) {
    var answer = 0;
    var sum = 0;
    let num = number.split('');
    for (var el of num){
        sum += Number(el);
    }
    answer = sum % 9;
    return answer;
}