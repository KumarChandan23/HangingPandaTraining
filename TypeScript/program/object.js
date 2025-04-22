// ! syntax 1
var car = { type: "Toyota", model: "Carolla", year: 2009 };
// ! syntax 2 Type Inference
var car1 = { type: "Brezaa" };
car1.type = "Baleno";
// car1.type = 23; // error not allowed
console.log(car1);
car1["model"] = "Carolla";
console.log(car1);
// ! syntax 3
var bus = {};
bus.model = 2020;
console.log(bus);
