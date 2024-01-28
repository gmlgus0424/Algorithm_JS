function solution(denum1, num1, denum2, num2) {
    // 두 분모의 곱을 공통 분모로 하여 값을 계산
    let abc = denum1 * num2 + denum2 * num1;
    let def = num1 * num2;

    // 분자와 분모의 최대공약수를 구하여 값을 나눔
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(abc, def);
    abc /= gcd;
    def /= gcd;

    return [abc, def];
}
