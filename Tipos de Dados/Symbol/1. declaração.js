// incluido no ES06

// O tipo Symbol é primitivo, único e imutável, atuando como uma *chave única* em um objeto

Symbol("a")
Symbol("b")
Symbol("c")

Symbol("a") == Symbol("a") // false

// Além disso, é utilizado em operações realizadas pelo intrepretador, como no comando *for/of* ou em operações da String API como *math, split, replace* e muitas outras

// Operações
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.match
Symbol.replace
Symbol.search
Symbol.species
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables
// ....

// match
let regexp = /JavaScript/
//regexp[Symbol.match] = false; // Usamos o symbol para evitar o error // teste no terminal node
console.log("/JavaScript/".startsWith(regexp)) // TypeError: First argument to String.prototype.startsWith must not be a regular expression at String.startsWith (<anonymous>)