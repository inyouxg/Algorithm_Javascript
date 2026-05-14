function solution(progresses, speeds) {
    let answer = [];
    let days = [];
    for(let i=0; i<progresses.length; i++){
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    //let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let current = days[0];
    let count = 1;
    
    for(let i=1; i<days.length; i++){
        if(days[i] <= current){
            count++;
        }else{
            answer.push(count);
            current = days[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}