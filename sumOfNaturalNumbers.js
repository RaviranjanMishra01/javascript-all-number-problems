function sumOfNaturalNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const number = 10;
console.log(`The sum of the first ${number} natural numbers is: ${sumOfNaturalNumbers(number)}`);
