function solution(n) {
    let a = 0; // F(0)
    let b = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        let answer = (a + b) % 1234567;
        a = b;
        b = answer;
    }

    return n === 0 ? 0 : b;
}