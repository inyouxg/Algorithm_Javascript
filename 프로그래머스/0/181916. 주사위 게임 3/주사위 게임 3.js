function solution(a, b, c, d) {
    const number = [a, b, c, d];
    const appear = {};
    /* appear 객체 안에 num[i](value)가 존재하지 않을 경우 0 + 1, 존재할 경우 value + 1을 해준다.
    결과적으로 num 배열 안의 값이 각각 얼마나 나타났는지 key : value로 기록.*/
    for(var i=0; i<4; i++){
        var num = number[i];
        appear[num] = (appear[num] || 0) + 1;
    }
    /* Object.values()로 객체의 value 값 반환, 그 중 제일 큰 값을 count로 지정. 
    Math.max는 배열 자체를 인자로 받지 않고 개별 인자를 받아야하므로 Object 앞에 전개 연산자는 필수.*/
    const count = Math.max(...Object.values(appear));
    /* 배열로 변환 후, 내림차 순으로 정렬 */
    let entries = Object.entries(appear).sort((a,b) => a[1] - b[1]);
    let answer = 0;
    switch(count){
        case 4: 
            answer = 1111 * a;
            break;
        case 3:
            answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2;
            break;
        case 2:
            if(entries.length === 2){
                answer = (Number(entries[0][0]) + Number(entries[1][0])) * Math.abs(Number(entries[0][0]) - Number(entries[1][0]));
            break;  
            }
            /* length가 3일 경우 내림차순 정렬을 해도 어느 인덱스가 p q r 인지 예측 불가. filter로 p를 제외시킨 후 남은 값을 q r 로 둔다. */
            if(entries.length === 3){
                entries = entries.filter((element) => element[1] === 1);
                answer = Number(entries[0][0]) * Number(entries[1][0]);
                break;
            }
        case 1:
            answer = Math.min(...number);
            break;
    }
    
    return answer;
}