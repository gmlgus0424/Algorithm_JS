function solution(num_list) {
    let abc = num_list.reduce((a, c) => {return a*c ;}, 1);
    let def = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (abc < def*def) ? 1 : 0;
}