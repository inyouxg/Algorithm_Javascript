function solution(priorities, location) {
    var answer = [];
    const queue = priorities.map((priority, index) => ({
        priority,
        index
    }));
    
    while(queue.length){
        if(queue.some(num => num.priority > queue[0].priority)){
            var num = queue.shift();
            queue.push(num);
        }else{
            answer.push(queue.shift());
        }
    }
    return answer.findIndex(v => v.index === location) + 1;
}