// function filterOutNegativeNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

  let numbers = [3, -1, 4, -5, 2];
let positiveNumbers = filterOutNegativeNumbers(numbers);
console.log(positiveNumbers);