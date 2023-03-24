// As expressões regulares são estrutuas formadas por uma *sequência de caracteres que especificam um padrão formal*
// que servem para validar, extrar ou mesmo substituir caracteres dentro de uma String.

// declaração
/john@gmail.com/;
typeof /john@gmail.com/; // object
new RegExp("john@gmail.com");

// Operações
let regExp = /john@gmail.com/;
let result = regExp.test("john@gmail.com"); // true

// volta mais detalhes
result = regExp.exec("john@gmail.com"); // ['john@gmail.com',index: 0,input: 'john@gmail.com', groups: undefined  ]
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

result = regExp.exec("john.doe@gmail.com"); // null
result = regExp.test("john.doe@gmail.com"); // false

// Metacaracteres - PT1
/*
    .   - qualquer dígito

    \   - é utilizada antes de caracteres especiais, com o objetivos de escapar

    ^   - inicia com um determinado caractere
    $   - finaliza com um determinado caractere

    // Grupos
    [abc] - Aceita qualquer caractere dentro do grupo, nesse caso  a, b, c;
    [^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b, c
    [0-9]  - Aceita qualquer caractere entre 0 e 9
    [^0-9]  - Não acita qualquer caractere entre 0 e 9

    // Quantificadores
    {n} - Quantifica um número específico
    {n,} - Quantifica um número Mínimo
    {n,m} - Quantifica um número mínico e um numero máximo
    ? - Zero ou um
    * - Zero ou mais
    + - Um ou mais

    // Metacaracteres
    \w - Representa o conjunto [a-zA-Z0-9_]
    \W - Representa o conjunto [^a-zA-Z0-9_]
    \d - Representa o conjunto [0-9]
    \D - Representa o conjunto [^0-9]
    \s - Representa um espaço em branco
    \S - Representa um não espaço em branco
    \n - Representa uma quebra de linha
    \t - Representa um tab

    para colocar um quantificador em torno de um conjunto uso ()
    /^\w+@\w+(\.\w{2,3})+$/

    // grupos de captura
    ()  - Determina um grupo de captura para realizar a extração de valores de uma determinada string
    //
*/
regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/;
result = regExp.exec("mary@hotmail.com");
//console.log(result)
console.log(result[0]); // mary@hotmail.com
console.log(result[1]); // mary
console.log(result[2]); // hotmail
console.log(result.index); // 0
console.log(result.input); // mary@hotmail.com

// Exercício
const query =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regexp = /create table (\w+) \(((\s?\w+ \w+,?)+)\)/;
const resultado = regexp.exec(query);
//console.log(resultado)
// Extraia o nome da tabela e armazene em uma variável chamada "tableName".
const tableName = resultado[1];

//Extraia as colunas da tabela e armazene em uma variável chamada "columns".
const colums = resultado[2];

// Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.
const columnsSeparete = colums.split(/\s?,\s?/)
console.log("TableName:", tableName);
console.log("Columns:", colums);
console.log("ColumnsSeparete:", columnsSeparete);
