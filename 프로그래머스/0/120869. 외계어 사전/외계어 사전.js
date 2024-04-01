function solution(spell, dic) {
    var answer = 2;
    spell = spell.sort().join('')
    
    dic.forEach(i=> {if (i.split('').sort().join('')==spell ) return answer =1})
    return answer;
}