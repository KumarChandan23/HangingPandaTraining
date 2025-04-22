// ! Casting
// casting is the process of overriding a type.

// ! casting with as keyword
// it does not converts the data types
// it only tells TypeScript to pretent it like specified type

// let x : unknown = 'hello';
// console.log(typeof x)
// console.log((x as string).toUpperCase())
// console.log(typeof x)
// console.log( (x as number).toFixed(2))

// ! casting with Angular Bracket <>
// it works same as "as" keyword
// This type of syntax does not works with Reactjs.

let y : unknown = "hello";
console.log( (<string>y).length)

// ! Force casting
// it is used to override the type error that TypeScript may throw
// First cast into unknown and then cast into targeted type.

let z = "23"
console.log( ((z as unknown) as number))
