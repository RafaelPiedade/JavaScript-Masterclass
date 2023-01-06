// length: Tamanho da String
"Javascript".length; // 10

// indexOf: Retorna a primeira posição encontrada do caractere passado por parâmentro
"PHP".indexOf("P"); // 0

// lasIndexOf: Retorna a ultima posição encontrada do caractere passado por parâmentro
"PHP".lastIndexOf("P"); // 2

// toUpperCase: Retorna uma nova String convertendo as letras para maiúsculas
"cobol".toUpperCase(); // COBOL

// toLowerCase: Retorna uma nova String convertendo as letras para minúsculas
"ALGOL".toLowerCase(); // algol

// charAt: Retorna o caractere na posição passada por parâmentro
"Javascript".charAt(1); // a

// charCodeAt: Retorna o código com base na posição passada por parâmentro
"JavaScript".charCodeAt(1); // 97

// fromCharCode: Retorna um caractere com base no código passado por parâmentro
String.fromCharCode(97); // a

// includes: Retorna true se a String contém a String passada por parâmentro
"Javascript".includes("Java"); // true

// startsWith: Retorna verdadeiro se a String inicia com a String passada por parâmetro
"Ruby".startsWith("R"); // true

// endsWith: Retorna true se a String termina com a String passada por parâmetro
"Earlang".endsWith("langs"); // true

// localeCompare: Retorna -1 se a String passada por parâmentro for maior,  se for igual e 1 se for menor - muito importante se eu for ordenar caracteres ou palavras
"C++".localeCompare("Rubby"); // -1
"a".localeCompare("b"); // -1
"a".localeCompare("a"); // 0
"b".localeCompare("a"); // 1
"Python".localeCompare("Java"); // 1

"a" < "b"; // true
"á" < "b"; // false
"a".charCodeAt(0); // 97
"b".charCodeAt(0); // 98
"á".charCodeAt(0); // 225
"a".localeCompare("b"); // -1
"á".localeCompare("b"); // -1

// match: Retornar partes da String com base na RegExp passada por parâmentro
"C++".match(/\+/g); // ['+', '+']
"C++".match(/\+/); // ['+', index: 1, input:'C++']

// search: Retorna a primeira posição encontrada com base na RegExp passada por parâmentro similar ao indexOf
"Java".search(/a/); // 1

// replace: Retorna um nova String resultante da substituição da String ou RegExp passada no primeiro parâmentro pelo segundo parâmetro
"JavaScript".replace("Java", "Ecma"); // EcmaScript
"JavaScript".replace(/a/g, 4); // J4v4Script'

// slice: Retorna uma parte da String que está invocando a função inciando na posição passada no primeiro parâmentro até a posição final passada no segundo parâmentro,
//        ou da posição passada no primeiro parâmentro até o fim caso o segundo parâmentro não seja informado.
"JavaScript".slice(0, 4); // 'Java' // posição inicial: 0    posição final: n - 1
"JavaScript".slice(4); // 'Script'
"JavaScript".slice(0, -6); // 'Java' // -6 de traz para frente 'Script'
"JavaScript".slice(-6); // 'Script'

// split: Retorna um array contendo o resultado da divisão da String original de acordo com o critério passado por parâmentro
"C;Java;JavaScript;Ruby".split(";"); // [ 'C', 'Java', 'JavaScript', 'Ruby' ]

// substring: Similar ao slice, não aceita valores negativos como parâmetro epermite a inversão dos parâmentos
"JavaScript".substring(0, 4); // 'Java'
"JavaScript".substring(4, 0); // 'Java' // ele inverte 0 4
"JavaScript".substring(4); // 'String'  // até o final

// concat: Retorna uma nova String resultante da concatenação da que está invocando a função e da outra, passada por parâmentro
"Java".concat("Script"); // 'JavaScript'
"Data".concat("Flex"); // 'DataFlex'

// padStart: Completa a String com caracteres no inicio
(8).toString(2).padStart(32, 0); // '00000000000000000000000000001000'
"Script".padStart(10, "Java"); // 'JavaScript'

// padEnd: Completa a String com caracteres no fim
"C".padEnd(3, "+"); // 'C++'

// repeat: Repete um caractere
'C'.concat("+".repeat(2)) // 'C++'

// trim: Elimina espacos em branco no inicio e no fim
" Self ".trim(); // 'Self'

// trimStart: Elimina espaços em branco no início
" Scheme".trimStart(); // 'Scheme'

// trimRight: Elimina espaços em branco no fim
"Perl ".trimEnd(); // 'Perl'
