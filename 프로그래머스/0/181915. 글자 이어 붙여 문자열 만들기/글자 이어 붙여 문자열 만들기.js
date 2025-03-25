function solution(my_string, index_list) {
    var str = [];
    let alphabet_list = [];
    alphabet_list = my_string.split('');
    for(const el of index_list){
        str.push(alphabet_list[el]);
    }
    var answer = str.join('');
    return answer;
}