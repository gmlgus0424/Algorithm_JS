function solution(a, b) {
  const abc= String(a) +  String(b)
  const dbc=String(b) + String (a)
  
  
  return abc>= dbc ? Number(abc) : Number(dbc)
}