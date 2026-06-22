function solution(bridge_length, weight, truck_weights) {
    // 다리 만들기
    var bridge = [];
    for(let i=0; i<bridge_length; i++){
        bridge.push(0);
    }
    //시간
    var count = 0;
    //다리 총 무게
    var total_weight = 0;
    
    while (truck_weights.length || bridge.some(v => v > 0)){
        count++;
        
        bridge.unshift(truck_weights[0]);
        total_weight += truck_weights[0];
        total_weight -= bridge.pop();
        
        if(total_weight > weight){
            bridge.splice(0,1,0);
            total_weight -= truck_weights[0];
        }else{
            truck_weights.shift();
        }
    }
    return count;
}