
// ! Partial
// - it changes all properties in an object to be optional.

interface Point{
    name:string
    age?:number
}
const person : Partial<Point> = {name:"Rahul"}
const person2 : Partial<Point> = {}
const person3 : Partial<Point> = {age:35}


// ! Required
// it changes all properties in an object to be required even after some properites are marked as optional with (?).

interface Rpoint{
    name:string,
    gender: boolean
    age?:number
}
const Rperson : Rpoint = {name:"Manish", gender:true}
const Rperson2 : Required<Rpoint> = {name:"Kapil",gender:true, age:29}

// ! Record
//  record<k,t> is utility type which construct or difines an object type 
// k : keys of type
// t : value of type

const obj:Record <number | string,string> = {
    23:"kumar",
    age:"twenty three"
}

const obj33 = {
    23:"kumar"
}

// ! Omit
// removs keys from an object type.

interface Opoint {
    name:string,
    age:number,
    gender:string
}
const Operson: Omit<Opoint,'age'> = {name:"Murshid", gender:"male"}

// ! Pick
// it keeps only picked element and removes all rest of all elements form the object.
interface pick{
    name:string,
    age:number,
    location:string
}
const employee : Pick<pick,'age'> = {age:30}

// ! Exclude
// it removes type form union
type marks = number|string;
const Marks: Exclude<marks,string> = 23;

// ! Readonly
// only access to read not to modify.

type MyType = {
    name: string;
    age: number;
  };
  
  type Keys = keyof MyType; 

  