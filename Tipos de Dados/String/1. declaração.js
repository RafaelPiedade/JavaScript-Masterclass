/*
O tipo String é primitivo, imutavel e é representado internamente pelo padrão Unicode, codificado em UTF-16
*/

// Declarações
"JavaScript"; // aspas simples
"JavaScript" // aspas duplas
`JavaScript`; // acento grave (template literal)
new String("JavaScript"); // função construtora - é mais lenta e pode prejudicar a perfomace [exemplo_1.js]

// Alguns tipos de caracteres não são permitidos e precisam ser escapados, usando \
console.log('String com texto que possui aspas \"texto\" utilizo a \\');
console.log("This is Maria's house");
console.log(
  `The proper way to couse a line terminator code point to be part of the String value of a string literal is to use an escape sequence such as \\n or \\u00A`
);

// Existem também caracteres de controle que podem ser utilizados para quebrar linhas, aumentar a identação entre outras coisas
/*

\b  => Backspace
\f  => Form Feed
\n  => New Line
\r  => Corriege Retur
\t  => Horizontal Tabulator
\v  => Vertical Tabulator

*/
let daysOfWeek =
  "0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat";
console.log(daysOfWeek);

// Utilizando Code Point no padrão Unicode
let daysOfWeekCodePoint =
  "\u0030 \u002d \u0053un\u000A\u0031 \u002d Mon\u000A\u0032 \u002d Tue\u000A\u0033 \u002d Wed\u000A\u0034 \u002d Thu\u000A\u0035 \u002d Fri\u000A\u0036 \u002d Sat";
console.log(daysOfWeekCodePoint);

// Template literal é uma forma de declarar uma String que permite a interpolação de expressões
let host = "localhost";
let port = "3000";
let resource = "users";
let url = "https://" + host + ":" + port + "/" + resource;
let urlWithTemplaceLiteral = `https://${host}:${port}/${resource}`;
console.log(url);
console.log(urlWithTemplaceLiteral);

// é possivel também declarar uma String multi linha, sem a necessidade de caracteres especias

let daysOfWeek1 =
  "0 - Sun" +
  "1 - Mon" +
  "2 - Tue" +
  "3 - Wed" +
  "4 - Thu" +
  "5 - Fri" +
  "6 - Sat";
console.log(daysOfWeek1);

let daysOfWeek2 =
  "0 - Sun\
  1 - Mon\
  2 - Tue\
  3 - Wed\
  4 - Thu\
  5 - Fri\
  6 - Sat";
console.log(daysOfWeek2);

let daysOfWeek3 =
"0 - Sun\n\
1 - Mon\n\
2 - Tue\n\
3 - Wed\n\
4 - Thu\n\
5 - Fri\n\
6 - Sat";
console.log(daysOfWeek3);

let daysOfWeek4 =
`0 - Sun
1 - Mon
2 - Tue
3 - Wed
4 - Thu
5 - Fri
6 - Sat`;
console.log(daysOfWeek4);