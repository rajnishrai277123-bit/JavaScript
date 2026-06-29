// ==========================================
// Q1. Find the Smaller Angle
// ==========================================
function Minimal_Angle(h, m) {
    
    h = h % 12;
    
    
    let hourAngle = (h * 30) + (m * 0.5);
    let minuteAngle = m * 6;
    
    
    let angle = Math.abs(hourAngle - minuteAngle);
    
    
    return Math.min(angle, 360 - angle);
}
console.log("Q1 Output (5, 30):", Minimal_Angle(5, 30)); // 15
console.log("Q1 Output (6, 0):", Minimal_Angle(6, 0));   // 180


// ==========================================
// Q2. Check whether the year is Leap year or not
// ==========================================
function Check_Leap(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
}
console.log("Q2 Output (1900):", Check_Leap(1900)); // Non Leap Year
console.log("Q2 Output (2012):", Check_Leap(2012)); // Leap Year


// ==========================================
// Q3. Perfect Number Check
// ==========================================
function Perfect_Check(N) {
    if (N <= 1) return "NO"; 
    
    let sum = 0;
    
    for (let i = 1; i <= N / 2; i++) {
        if (N % i === 0) {
            sum += i;
        }
    }
    
    return sum === N ? "YES" : "NO";
}

console.log("Q3 Output (6):", Perfect_Check(6));   // YES
console.log("Q3 Output (96345):", Perfect_Check(96345)); // NO


// ==========================================
// Q4. Reverse a Number
// ==========================================
function Reverse_Number(N) {

    let reversed = N.toString().split('').reverse().join('');
    return parseInt(reversed, 10);
}
console.log("Q4 Output (1900):", Reverse_Number(1900)); // 91
console.log("Q4 Output (2012):", Reverse_Number(2012)); // 2102


// ==========================================
// Q5. Substring Check
// ==========================================
function Substring_Check(S1, S2) {

    if (S2.includes(S1)) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log("Q5 Output ('Prepbuddy', 'Hii this is Prepbuddy'):", Substring_Check("Prepbuddy", "Hii this is Prepbuddy")); // YES
console.log("Q5 Output ('Prepbytes', 'Hii this is Prepbuddy'):", Substring_Check("Prepbytes", "Hii this is Prepbuddy")); // NO