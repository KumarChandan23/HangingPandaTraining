// ! syntax 1
const CarD: {type:string, model:string, year:number} = {type:"Toyota",model:"Carolla", year:2009}

// ! syntax 2 Type Inference
const car1 = {type:"Brezaa"};
car1.type = "Baleno";
// car1.type = 23; // error not allowed
console.log(car1)
car1["model"] = "Carolla";
console.log(car1)

// ! syntax 3

const bus :{[index:string]:number} = {};
bus.model = 2020;
console.log(bus)