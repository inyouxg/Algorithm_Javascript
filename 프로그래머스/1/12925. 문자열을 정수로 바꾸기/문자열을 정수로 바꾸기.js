// function solution(s) {
//     var arr = s.split("");
//     if(arr[0] === '-'){
//         arr.shift();
//         arr = arr.join("");
//         return -1 * Number(arr);
//     }else return Number(s);
// }

function solution(s){
  return +s;
}
//자바스크립트에서는 문자열 앞에 단항 연산자를 붙여줄 경우 숫자로 변환해 준다.
//Number(s)도 가능하다. "-1234"가 안된다고 생각하는 경우가 있는데, 음수로 잘 변환됨.