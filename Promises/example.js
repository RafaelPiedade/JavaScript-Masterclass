// function sum(a, b, callback) {
//   setTimeout(() => {
//     callback(a + b);
//   }, 1000);
// }

// sum(2, 2, (a) => {
//     sum(4, 4, (b) => {
//         sum(a, b, (result) => {
//             console.log(result);
//           });
//       });
// });
// ===========

// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (!a || !b) return reject("Invalid Input");
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1000);
//   });
// }

// sum()
//   .then((a) => {
//     sum()
//       .then((b) => {
//         sum()
//           .then((result) => {
//             console.log(result);
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// =================
// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (!a || !b) return reject("Invalid Input");
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1000);
//   });
// }

// console.time("performace")
// sum(2, 2)
//   .then((a) => {
//     return sum(4, 4).then((b) => {
//       return sum(a, b).then((result) => {
//         console.log(result);
//         console.timeEnd("performace")
//       });
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//====================
// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (!a || !b) return reject("Invalid Input");
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1000);
//   });
// }

// console.time("performace");
// Promise.all([sum(2, 2), sum(4, 4)])
//   .then((values) => {
//     const [a, b] = values;
//     return sum(a, b).then((result) => {
//       console.log(result);
//       console.timeEnd("performace");
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// ==================
function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid Input");
    setTimeout(() => {
      resolve(a + b);
    }, Math.random() * 1000);
  });
}

console.time("performace");
Promise.race([sum(2, 2), sum(4, 4)])
  .then((value) => {
    console.log(value);
    return sum(value, value).then((result) => {
      console.log(result);
      console.timeEnd("performace");
    });
  })
  .catch((e) => {
    console.log(e);
  });
