function solution(seoul) {
    var idx = 0;
    while(seoul[idx] !== "Kim"){
        idx++;
    }
    return "김서방은 " + idx + "에 있다";
}