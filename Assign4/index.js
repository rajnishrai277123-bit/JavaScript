// Q1. Find the Product.
const Find_Prod = (array, N) => {
    let prod = 1;
    for (let i = 0; i < N; i++) {
        prod *= array[i];
    }
    return prod;
};
console.log("Q1 Output:", Find_Prod([1, 2, 3, 4, 5], 5)); // Output: 120

// Q2. Find the Sum.
const Find_Sum = (array, N) => {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += array[i];
    }
    return sum;
};
console.log("Q2 Output:", Find_Sum([1, 2, 3, 4, 5], 5)); // Output: 15

// Q3. Count Occurrences
const findCount = (N, K, Arr) => {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] === K) {
            count++;
        }
    }
    return count;
};
console.log("Q3 Output:", findCount(4, 3, [3, 3, 1, 2])); // Output: 2

// Q4. Even Odd
const findEvenOdd = (N, Arr) => {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) sumEven += Arr[i];
        else sumOdd += Arr[i];
    }
    return [sumEven, sumOdd];
};
console.log("Q4 Output:", findEvenOdd(7, [1, 2, 3, 4, 5, 6, 7])); // Output: [12, 16]

// Q5. Find whether the number is present or not
const Find_Num = (array, N, M) => {
    for (let i = 0; i < N; i++) {
        if (array[i] === M) {
            return "YES";
        }
    }
    return "NO";
};
console.log("Q5 Output:", Find_Num([1, 2, 3, 4, 5], 5, 2)); // Output: YES

// Q6. Higher Age
const highAge = (N, Arr) => {
    let result = [];
    for (let i = 0; i < N; i++) {
        if (Arr[i] >= 18) {
            result.push(Arr[i]);
        }
    }
    return result;
};
console.log("Q6 Output:", highAge(6, [11, 23, 3, 45, 72, 68])); // Output: [23, 45, 72, 68]

// Q7. Increment the Array Elements
const Inc_Arr = (array, N) => {
    let result = [];
    for (let i = 0; i < N; i++) {
        result.push(array[i] + 1);
    }
    console.log("Q7 Output:", result.join(" "));
};
Inc_Arr([1, 2, 3, 4, 5], 5); // Output: 2 3 4 5 6

// Q8. Pass or Fail
const isAllPass = (N, Arr) => {
    for (let i = 0; i < N; i++) {
        if (Arr[i] < 32) {
            return "NO";
        }
    }
    return "YES";
};
console.log("Q8 Output:", isAllPass(7, [13, 89, 45, 98, 67, 45, 54])); // Output: NO

// Q9. Unique Color Shirt
const Unique_Shirts = (N, arr) => {
    let frequency = {};
    for (let i = 0; i < N; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    
    let uniqueCount = 0;
    for (let key in frequency) {
        if (frequency[key] === 1) {
            uniqueCount++;
        }
    }
    return uniqueCount;
};
console.log("Q9 Output:", Unique_Shirts(6, [3, 2, 4, 1, 2, 3])); // Output: 2

// Q10. Min and Max
const arrayMin = (arr, N) => {
    let min = arr[0];
    for (let i = 1; i < N; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
};

const arrayMax = (arr, N) => {
    let max = arr[0];
    for (let i = 1; i < N; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
};

let testArr = [66, 33, 11, 44, 66, 22, 77];
console.log("Q10 Output:", arrayMin(testArr, 7) + " " + arrayMax(testArr, 7)); // Output: 11 77