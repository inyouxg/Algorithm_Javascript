function solution(array, commands) {
    var answer = [];
    for(const num of commands){
        var slice = array.slice(num[0] - 1, num[1]);
        slice.sort((a,b) => a-b);
        answer.push(slice[num[2] - 1]);
    }
    return answer;
}