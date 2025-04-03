# components
components are the building blocks of the UI. A component is a reusable, self-contained piece of code that defines how a part of the user interface (UI) should look and behave.

# Types of Components in React
1. Functional Components (Preferred)
2. Class Components 

# Functional Components
Written as JavaScript functions.
Use hooks (useState, useEffect, etc.) for state and side effects.
More concise and easy to read.
Ex: 
    function Greeting() {
        const greet = "Hello"
        return <h1>{greet} This Functional component</h1>;
    }

# class base component 
a class based component is a react component
it used ES6 class syntax
it need render method
it manages state using this.state
it updates state using this.setState()
it uses lifecycle methods 
like componentDidMount(), componentWillUpdate(), componentWillUnmount()
Syntax: 
import React , {Component} from 'react'

class compoName extends Component{
    constructor(props){
        super(props);
        this.state = {
            greet : "Hello"
        }
    }
    render(){
        return(
            <h1> {this.state.greet} This is class based component </h1>
        )
    }
}

# Props 
props are the way to pass data form one component to other component.
props are the read-only data. it can not be modified by the receiver.
Example: 
import React from 'react';

const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Welcome;

# Conditional Rendering
conditional rendering means displaying differenct component or user interfase on certain condition
in rect we can achieve it using
1. if else 
    (isLoggedIn){
        console.log("Yes you are allowed ot see details")
    }else{
        console.log("Yoy are not allowed to see detials, Please login first")
    }
2. Ternary Operator
    {idLoggedIn ? console.log("Yes you are allowed ot see details") : console.log("Yoy are not allowed to see detials, Please login first")}
3. Logincal End
    {isLoggedIn && (console.log("Yes you are allowed ot see details"))}
4. switch case 
   const day = "Monday";
    switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another day!");
    }

# Composition
composition is pattern in react where we combine multiple components to build reusable, flexible UI Structure instead of relaying on inheritance
✅ why use composition
1. To make code moduler and reusable
2. Encourages separation of concerns
3. improves maintainability
4. using composition we can create models sidebase and more..