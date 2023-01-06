let conter = 0;
console.time("performace");
while (conter < 100000) {
  //new String("JavaScript");
  'JavaScript'
  conter++;
}
console.timeEnd('performace');

// 'new String('JavaScript')' ~= 3.063ms
// 'JavaScript' ~= 1.214ms