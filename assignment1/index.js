// ================= Q1 =================
function AddTwoNumbers(A, B) {
    return A + B;
}

console.log("Q1:", AddTwoNumbers(2, 5));


// ================= Q2 =================
function Is_Valid(A, B) {
    return (A < 10 && A > B);
}

console.log("Q2:", Is_Valid(5, 3));


// ================= Q3 =================
function Check(A, B) {
    return (A % 10 === 0 || B % 10 === 0);
}

console.log("Q3:", Check(12, 20));


// ================= Q4 =================
function First_Digit(N) {
    return Math.floor(N / 1000);
}

console.log("Q4:", First_Digit(4567));


// ================= Q5 =================
function Last_Digit(N) {
    return N % 10;
}

console.log("Q5:", Last_Digit(4567));


// ================= Q6 =================
function Find_the_remainder(A, B) {
    return B % A;
}

console.log("Q6:", Find_the_remainder(2, 9));


// ================= Q7 =================
function Multiply_two_number(A, B) {
    return A * B;
}

console.log("Q7:", Multiply_two_number(2, 5));


// ================= Q8 =================
function Sum(A, B, C) {
    return A + B + C;
}

function Average(A, B, C) {
    return ((A + B + C) / 3).toFixed(2);
}

console.log("Q8 Total Marks:", Sum(50, 20, 100));
console.log("Q8 Average Marks:", Average(50, 20, 100));