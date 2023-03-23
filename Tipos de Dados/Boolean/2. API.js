// Operadores de comparação
1 == 2; // false
10 === 10; // true
"a" != "b"; // true
3 !== 2; // true
6 > 7; // false
5 >= 5; // true
"z" < "x"; // false
"c" <= "c"; // true

// cuidado com os operadoes de comparacao != ==
0 == ""; // true
0 == "0"; // true
false == undefined; // false
false == null; // false
null == undefined; // true
1 == true; // true
0 == false; // true
0 == "\n"; // true

// prefira sempre a utilização dos operadoes === e !==, eles além de comprarar verificam o tipo
0 === ""; // false
0 === "0"; // false
false === undefined; // false
false === null; // false
null === undefined; // false
1 === true; // false
0 === false; // false
0 === "\n"; // false

// operadoes lógicos  || e &&
0 || 2; // 2
1 || 2; // 1
1 && 2; // 2
0 && 2; // 0

function generateSerial(max) {
  return Math.floor(Math.random() * max);
}
console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial()); // NaN

function generateSerial2(max) {
  //   if (max === undefined) { // apenas o undfined é tratado
  //     max = 1000;
  //   }

  // if (!max) { // todas as condições false
  //     max = 1000;
  //   }

  max = max || 1000; // todas as condições falsas e legibilidade - se for false retorna o 1000
  return Math.floor(Math.random() * max);
}
console.log(generateSerial2());

// Operadore ternário (expressão) ? true : false
10 ? "good" : "bad"; // good
let grade = 10 ? "good" : "bad"; // good
0 ? "good" : "bad"; // bad
