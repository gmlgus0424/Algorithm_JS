function solution(start, end) {
  let list = [];
  for (i = start; i >= end; i--) {
    list.push(i);
  }

  return list;
}