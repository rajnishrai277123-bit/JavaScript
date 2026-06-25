// Q1. Find Grades
function findGrades(M) {
    switch (true) {
        case (M <= 10):
            return "E";
        case (M <= 20):
            return "D";
        case (M <= 30):
            return "C";
        case (M <= 40):
            return "B";
        default:
            return "A";
    }
}

console.log(findGrades(35));

// Q2. Get Value
function getValue(C) {
    switch (C) {
        case 'P':
        case 'p':
            return "PrepBytes";

        case 'Z':
        case 'z':
            return "Zenith";

        case 'E':
        case 'e':
            return "Expert Coder";

        case 'D':
        case 'd':
            return "Data Structure";
    }
}

console.log(getValue("E"));

// Q3. Maximum of Three Numbers
function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    }
    return Math.max(A, B, C);
}

console.log(Max_out_of_three(2, 5, 4));

// Q4. Second Smallest
function findSndSmallest(X, Y, Z) {
    let arr = [X, Y, Z];
    arr.sort((a, b) => a - b);
    return arr[1];
}

console.log(findSndSmallest(2, 9, 23));

// Q5. Acute or Obtuse Triangle
function Triangle_Check(A, B, C) {
    if (A < 90 && B < 90 && C < 90) {
        return "acute";
    } else {
        return "obtuse";
    }
}

console.log(Triangle_Check(60, 100, 20));