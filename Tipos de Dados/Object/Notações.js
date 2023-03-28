/**
 * Um objeto é uma *coleção dinâmica de proprietades* definidas por chaves, que podem ser do tipo String ou Symbol, e valores que poder ser de qualquer tipo
 * É possivel criar objetos de varias formas: pela notação literal, por meio de um função construtora ou do método create da Object API
 */

{
}
new Object();
Object.create(null);

// Existe diferença entre essas formas?
// Depende do seu objetivo,para algo simples {} notação literal
// quando criamos atraves de classes, Data,Array usamos o new;
// Se eu quiser identificar o protótipo Object.create

// Uma das diversas maneiras de atribuir propriedades a um objeto é durante a sua inicialização, pela notação literal
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };
// console.log(book);
// Short hand notation (ES6) - Se a variavel tiver o mesmo nome do attrb que quero no objeto, posso passar direto
// const title = "Clean Code";
// const author = "Robert C. Martin";
// const pages = 464;
// const language = "English";
// const available = true;
// const book2 = {
//   title,
//   author,
//   pages,
//   language,
//   available,
// };
// console.log(book2)

// dependendo da chave é necessário declará-la diretamente como string .
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   "number-of-pages": 464,
//   language: "English",
//   available: true,
// };
// console.log(book);

// Também é possivel computar as chaves em tempo de execução
// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";
// const book = {
//   [key1]: "Clean Code",
//   [key2]: "Robert C. Martin",
//   [key3]: 464,
//   [key4]: "English",
//   [key5]: true,
// };
//============================
// Além da notação literal, é possivel atribuir proprietades aos objetos *por meio da sua referência*
// Cada vez que chamo book.* estou criando
// const book = {};
// //const book = new Object(); // funciona tbm
// //const book = Object.create(null);// funciona tbm
// book.title = "Clean Code";
// book.author = "Robert C. Martin";
// book.pages = 464;
// book.language = "English";
// book.available = true;
// console.log(book);

// Assim como a notação literal, é possível computar as chaves de um objeto *em tempo de execução por meio da sua referência*
// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";
// book[key1] = "Clean Code";
// book[key2] = "Robert C. Martin";
// book[key3] = 464;
// book[key4] = "English";
// book[key5] = true;
// console.log(book);

// Cada uma das propriedades de um objeto podem ser consultadas por meio de sua referência, de forma direta
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };
// console.log(book.title)
// console.log(book.author)
// console.log(book.pages)
// console.log(book.language)
// console.log(book.available)

// é possivel consultar cada uma das propriedades de um objeto por meio da computação das chaves
// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };
// for(let key in book){
//   console.log(book[key])
// }

// copiando um objeto para outro
const book1 = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true,
};

const book2 = {}
for (let key in book1) {
  book2[key] = book1[key]
}
console.log(book2)