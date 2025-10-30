function sumOfEvnnumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Check if the number is even
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumOfEvnnumbers(numbers);
console.log("Sum of even numbers in array:", evenSum);