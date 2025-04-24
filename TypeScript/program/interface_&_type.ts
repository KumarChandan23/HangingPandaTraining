// ! Type
// it allow defining types with custom names

type carYear = number;
type carModel = string;
type carColor = string;

const CarYear:carYear = 2025;
const CarModel = "carolla";
const CarColor: carColor =  "red";

type carType = {
    year:carYear,
    model:carModel,
    color:carColor
}

const Car: carType = {
    year:2022,
    model:"bogati",
    color:"red"
}

/*
 ! Interface
 - It is similar to type but interface is only applied on object.
 - It is used to create reusable types of data to share with multiple object
 */

 const rac: {hieght:number} = {hieght:23}
//  rac.width = "nube" // not allowed

 interface Ractangle  {
    height : number,
    width : number
 }

 const ractangle: Ractangle = {
    height: 20,
    width : 30
 }

 interface RactangleWithColor extends Ractangle {
    color: string
 }

 const box : RactangleWithColor = {
    height: 50,
    width: 40,
    color: "red"
 }