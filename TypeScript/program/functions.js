// ! we can deside return type of function like this - 
function sum(a, b, c) {
    return a + b + (c || 0);
}
//  if no return type is defined then TypeScript will try to infer it thrugh the types of variable
// ! void retun type
// it is usefull when a function does not return any thing.
function print() {
    console.log("hellow");
}
var result = sum(23, 34);
console.log(result);
// ! default parameter 
function sum2(n1, n2) {
    if (n1 === void 0) { n1 = 10; }
    return n1 + (n2 || 0);
}
var result2 = sum2();
console.log(result2);
