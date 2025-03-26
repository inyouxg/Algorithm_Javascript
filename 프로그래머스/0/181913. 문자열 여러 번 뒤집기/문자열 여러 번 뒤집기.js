function solution(my_string, queries) {
    var answer = '';
    var arr = my_string.split('');
    
    for(let el of queries){
        let [start, end] = el;
        let sub = arr.slice(start, end+1).reverse();
        for(let i=start; i<=end; i++){
            arr[i] = sub[i-start];
        }
    }
    answer = arr.join('');
    return answer;
}