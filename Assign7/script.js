// Q1: Find the number of digits
const Find_Digits = (N) => {
    return N.toString().length;
};

// Q2: Find the Fives
const Find_Five = (N) => {
    let count = 0;
    let str = N.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '5') count++;
    }
    return count;
};

// Q3: Find Sum (Sum of even integers from 1 up to N)
const findSum = (N) => {
    let sum = 0;
    for (let i = 2; i <= N; i += 2) {
        sum += i;
    }
    return sum;
};

// Q4: Find the sum of the digits of a given number
const Number_Sum = (N) => {
    let sum = 0;
    let str = N.toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i], 10);
    }
    return sum;
};

// Q5: Print the Odds (Print 2 first, then odd numbers up to N)
const Print_Odd = (N) => {
    let result = "2";
    for (let i = 3; i <= N; i += 2) {
        result += " " + i;
    }
    console.log(result);
};

// Q6: Print the Pattern
const Print_pattern = (N) => {
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i));
    }
};

// Q7: Check whether a Number is a prime or not
const Prime_Check = (N) => {
    if (N <= 1) return "NO";
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return "NO";
    }
    return "YES";
};

// Q8: Print Numbers (from 1 to N)
const printNumbers = (N) => {
    let result = "";
    for (let i = 1; i <= N; i++) {
        result += i + (i === N ? "" : " ");
    }
    console.log(result);
};

// Q9: Print the Table (Multiplication table 1 to 10)
const Print_Table = (N) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${N}*${i}=${N * i}`);
    }
};

// ==========================================
// TEST CASES (Check your console to verify)
// ==========================================
console.log("--- Q1: Find_Digits(1234) ---");
console.log(Find_Digits(1234)); // Expected: 4

console.log("\n--- Q2: Find_Five(345654) ---");
console.log(Find_Five(345654)); // Expected: 2

console.log("\n--- Q3: findSum(6) ---");
console.log(findSum(6)); // Expected: 12

console.log("\n--- Q4: Number_Sum(1234) ---");
console.log(Number_Sum(1234)); // Expected: 10

console.log("\n--- Q5: Print_Odd(10) ---");
Print_Odd(10); // Expected: 2 3 5 7 9

console.log("\n--- Q6: Print_pattern(5) ---");
Print_pattern(5); // Expected: Asterisk stair pattern

console.log("\n--- Q7: Prime_Check(7) & Prime_Check(4) ---");
console.log(Prime_Check(7)); // Expected: YES
console.log(Prime_Check(4)); // Expected: NO

console.log("\n--- Q8: printNumbers(4) ---");
printNumbers(4); // Expected: 1 2 3 4

console.log("\n--- Q9: Print_Table(3) ---");
Print_Table(3); // Expected: 3*1=3 up to 3*10=30