function solution(clothes) {
    var map = new Map();
    var answer = 1;
    for(item of clothes){
        map.set(item[1], (map.get(item[1]) || 0) + 1);
    }
    for([key, value] of map){
        answer *= (value + 1);
    }
    return answer - 1;
}