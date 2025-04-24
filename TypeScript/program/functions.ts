// ! we can deside return type of function like this - 

function sum(a:number, b:number, c?:number): number{
    return a + b + (c || 0);
}

//  if no return type is defined then TypeScript will try to infer it thrugh the types of variable

// ! void retun type
// it is usefull when a function does not return any thing.

function print():void{
    console.log("hellow")
}

let result = sum(23,34);
console.log(result)

// ! default parameter 

function sum2(n1:number=10, n2?:number):number{
    return n1 + (n2 || 0)
}
let result2 = sum2(_,2)
console.log(result2)