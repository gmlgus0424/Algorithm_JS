function solution(my_string) {
    
    return my_string.trim().split(/\s+/)
}
//split(" "): 연속된 공백문자가 아니라, 공백 문자 하나(" ")를 구분자로 사용하여 분할

//(/\s+/): 연속된 공백문자를 구분자로 인식하여 분할