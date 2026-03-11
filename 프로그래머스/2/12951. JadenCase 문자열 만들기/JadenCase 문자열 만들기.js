function solution(string) {
    var answer = "";
    var first = true;

    for(let s of string){
        if(s === " "){
            answer += s;
            first = true;
        }
        else if(first){
            answer += s.toUpperCase();
            first = false;
        }
        else{
            answer += s.toLowerCase();
        }
    }

    return answer;
}