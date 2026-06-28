// ==========================================
// Q1. Create a Function
// ==========================================
function addSetterMethod(obj) {
    obj.setter = function() {
        console.log(this.name);
    };
    return obj;
}

console.log("--- Q1 Output ---");
let obj1 = { name: "Utkarsh" };
addSetterMethod(obj1);
obj1.setter(); // Expected output: Utkarsh


// ==========================================
// Q2. Delete a Parameter
// ==========================================
function deleteRollNo(obj) {
    // Check if property exists, then delete
    if (obj.rollno !== undefined) {
        delete obj.rollno;
        return "True";
    }
    return "False";
}

console.log("\n--- Q2 Output ---");
let obj2 = { name: "Utkarsh", rollno: 129 };
console.log(deleteRollNo(obj2)); // Expected output: True


// ==========================================
// Q3. Check whether the Package is Dream Package or not
// ==========================================
function checkPackage(obj) {
    // Assuming > 500,000 is a Dream package based on sample output
    return obj.salary > 500000 ? "Dream" : "NotDream";
}

console.log("\n--- Q3 Output ---");
let obj3 = { salary: 100000 };
console.log(checkPackage(obj3)); // Expected output: NotDream


// ==========================================
// Q4. Check whether the Object has a parameter or not
// ==========================================
function hasParameter(obj) {
    // Object.keys() returns an array of the object's properties
    return Object.keys(obj).length === 0 ? "false" : "true";
}

console.log("\n--- Q4 Output ---");
let obj4 = { someVar: 1 };
console.log(hasParameter(obj4)); // Expected output: true


// ==========================================
// Q5. Merge the Objects
// ==========================================
function mergeObjects(obj1, obj2) {
    // The spread operator (...) easily merges two objects
    return { ...obj1, ...obj2 };
}

console.log("\n--- Q5 Output ---");
let obj5a = { name: "Utkarsh", id: 129 };
let obj5b = { state: "Haryana", code: 121009 };
console.log(mergeObjects(obj5a, obj5b)); 
// Expected output: { name: 'Utkarsh', id: 129, state: 'Haryana', code: 121009 }


// ==========================================
// Q6. Object Multiplier
// ==========================================
function objectMultiplier(obj, N) {
    obj.id = obj.id * N;
    obj.houseno = obj.houseno * N;
    return obj; 
}

console.log("\n--- Q6 Output ---");
let obj6 = { id: 12, houseno: 146 };
console.log(objectMultiplier(obj6, 2)); 
// Expected output: { id: 24, houseno: 292 }


// ==========================================
// Q7. Find the sum of Object Members
// ==========================================
function sumMembers(obj) {
    return obj.p1 + obj.p2 + obj.p3;
}

console.log("\n--- Q7 Output ---");
let obj7 = { p1: 1, p2: 2, p3: 3 };
console.log(sumMembers(obj7)); // Expected output: 6


// ==========================================
// Q8. Check whether the Objects are same or not
// ==========================================
function checkSame(obj, new_name, new_id) {
    return (obj.name === new_name && obj.id === new_id) ? "true" : "false";
}

console.log("\n--- Q8 Output ---");
let obj8 = { name: "Utkarsh", id: 2 };
console.log(checkSame(obj8, "Prepbytes", 3)); // Expected output: false