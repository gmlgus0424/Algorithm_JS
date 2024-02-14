function solution(my_string) {

    return my_string.split('').filter((element,index,arr)=> arr.indexOf(element)===index).join('')
    console.log(my_string)
}