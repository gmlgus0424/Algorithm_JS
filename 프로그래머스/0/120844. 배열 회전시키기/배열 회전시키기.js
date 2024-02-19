function solution(numbers, direction) {
    
    // 마지막 요소 제거 후 시작부분에 추가 즉 오른쪽 한칸 이동 
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        // 첫번째 요소 제거 후 배열 마지막 부분에 추가 즉 왼쪽 한칸 이동 
        numbers.push(numbers.shift())
    }
    return numbers
}