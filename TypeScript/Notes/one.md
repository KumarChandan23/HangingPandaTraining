# TypeScript compilor
- it is compiled into javaScript using compiler.
- so that ts can run anywehere, wehre js can.

# installting compilor
- using npm : npm install typescript --save-dev

# Type Assignment
1. Implicit : let firstName = "Dylan"
2. Explicit : let firstName: string = "Dylan";
- Gussing the value is known as infer.

# Data types
▶️ Simple Types
1. boolean: true or false, let result : boolean  = true/false
2. number : whole number and floating point value, let marks: number = 233;
3. string : text value. let, let name: string = "kumar" 
4. Symbol : it is used create globaly unique value.
5. bigint : Larger than number

▶️ Special Types

1. Any:
- It disables type checking.
- It allow all types to be used.
- syntax, let num:any = true; // valid

2. Unknown: 
- it is similar to Any, but safer alternative to any.
-

# Array 
1. const arr: string[] = ["one","two"];
- only string vlaue is assignalbe to array.
- like: "name" , "kumar". anythingh else not allowed.

2. const arr:number[] = [1,2,3,4] //only number is allowed

3. const arr: readonly number = [1,2,4,3,5];
- This is can not be modified.

# Type inference : automatically detect type of value, function return type and more..

# Tuple
- a Tuple is typed array with predifined length and types of each element
- Tuple are good because they allow each array elements type to be known.
- let arr: [number, string, boolean, number] = [23,"kumar",true, 25]
- order maters in tuples.
- make it secure and error free use readonly.

# Named Tuple 
- let arr:[x:string, y:boolean] = ["23",false];

