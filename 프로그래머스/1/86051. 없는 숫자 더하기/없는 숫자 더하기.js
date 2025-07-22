function solution(numbers) {
    numbers = numbers.sort((a,b) => a-b);
    var i = 0;
    var num= [0,1,2,3,4,5,6,7,8,9];
    var answer = 0;
    for(let element of num){
        if(!numbers.includes(element)){
            answer += element;
        }
    }
    return answer;
}

//includes는 배열 전체를 훑으면서 특정 값이 있는지 찾는 함수.
//그런데 0~9의 총합에서 numbers의 전체합을 빼면 간단하게 값이 나옴.ㅜㅜ 