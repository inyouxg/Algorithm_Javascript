function solution(str_list) {
    var answer = [];
    var num1 = str_list.indexOf("l");
    var num2 = str_list.indexOf("r");
    if(num1 === -1 || num2 === -1){
        answer = (num1 >= num2) ? str_list.slice(0, num1) : str_list.slice(num2+1, str_list.length+1);
    }
    else {
        answer = (num1 < num2) ? str_list.slice(0, num1) : str_list.slice(num2+1, str_list.length+1);  
    }
    return answer;
}

// function solution(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'l') return arr.slice(0, i);
//         if (arr[i] === 'r') return arr.slice(i + 1);
//     }
//     return [];
// }