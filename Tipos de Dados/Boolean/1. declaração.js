/*
O tipo Boolean é primitivo, imutavel e representado pelas palavras reservadas 'true' e 'false
*/
typeof true
typeof false // boolean

new Boolean(false)

typeof new Boolean(true) // object

//Example

//let condition = true
//let condition = new Boolean(true) // true
/**
 A coersao de tipo acontece quando um tipo de dado é utilizado em um contexto onde ele é
 'convertido de forma implícita ou explícita'.
 */
let condition = new Boolean(false) // true
if(condition){
    console.log("The condition is true")
}else{
    console.log("The condition is false")
}

// Apenas esses 6 valores são convertidos para FALSE
!!0;
!!NaN;
!!"";
!!false;
!!undefined;
!!null;