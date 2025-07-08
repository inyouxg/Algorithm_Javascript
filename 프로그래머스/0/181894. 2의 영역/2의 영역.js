function solution(arr) {
    var a = arr.indexOf(2);
    var b = arr.lastIndexOf(2);
    
    if(a === -1){ 
        return [a];
    }else{
        return arr.slice(a,b+1);
    }
}
// return a === -1? [-1] : arr.slice(a, b+1)로 정리 가능.