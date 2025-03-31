function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let answer = [];
    let i = 2;
    while(i <= numer && i <= denom){
        while(numer % i == 0 && denom % i == 0){
            numer /= i;
            denom /= i;
        }
        i++;
    }
    answer = [numer, denom];
    return answer;
}