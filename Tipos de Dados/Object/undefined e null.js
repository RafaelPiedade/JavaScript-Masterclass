// O tipo undefined é retornado caso a chave não seja encontrada
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };
// console.log(book.publisher) // undefined
// console.log('title' in book)
// console.log('author' in book)
// console.log('pages' in book)
// console.log('language' in book)
// console.log('available' in book)
// console.log('publisher' in book)

// Qual a diferença entre os tipo undefined e null
// undefined - propriedade sequer existe
// null - indica ausencia de valor

// Não atribua para undefined ou null com intenção de apagar um propriedade
const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};

book.available = undefined;
console.log(book) // available: undefined
console.log("available" in book) // true

// As propriedades de um objeto podem ser apagadas por meio do operador delete
delete book.available
//delete book["available"]
console.log(book) // {}
console.log("available" in book) // false
