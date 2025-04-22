// ! Enums: It is special class that represents a group of constants (unchangable variable)
// Enums comes in two flavor Number and String.
/*
 ! Numric enums
 - It is used to show status code.
 - stytax: enum direction {North, West, South, East}
 ? By default enums will initiase first value to 0 and add 1 for each
 - like this
 - North:0, West:1, South:2, East:3
? we can also define fist starting value and rest will be add 1
- like North:10, and rest will increased by one
? we can also define all 
- like NotFound:404, Success:200, Acceped:202, Badrequest:400

! String enums
- Syntax: enum direction {north="North", west="West", south="South", east="East"}
*/

enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
  }
  
  const role = Role.Admin;
console.log(Role.User)  