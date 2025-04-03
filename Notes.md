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

# HooKs
- Hooks are function that let you use state and lifecycle features in functinal components without writing class. They were introduce in react 16.8v
✅ why use hooks
1. To avoid class components
2. To make component cleaner and reusable
3. To share login easily by creating custome hooks
4. To manage state and side effects in functional components

✅ common hooks
useState(), useEffect(), useCallback(), useMemo(), useContext(), useReducer(), useReff(), etc..

# ✅ useState()
- It is React hook that allow functional component to manange state.
- Before hooks stare was only possbile in class component.
- When useState() triggers component re-renders each time.
- Syntax:  const [state , setState] = useState(initialValue);
    - state: current state value
    - setState: state updator function
    - initialValue: default state value
- Example:
    import React, { useState } from "react";

    const Counter = () => {
    const [count, setCount] = useState(0); // State variable

    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
    };

    export default Counter;

# ✅ useEffect()
- It is React hook used handle side effect in functional components. 
- It allow us to perform operations such as data fetching, event handling and DOM manipulation, etc..
- Before hook side effect were managed inside class lifecycle methods like componentDidMount(),            componentWillUpdate(), componentWillUpdate()
- Syntax: 
    useEffect(()=>{// side effects},[dependency])
     - ()=>{} : callback function 
     - dependency : it controlls when to run effect
▶️ case 1 : without dependency 
    - useEffect(()=>{})
    - it will execute on each render of component
▶️ case 2 : with empty dependency
    - useEffect(()=>{},[])
    - it will execute only once when renders for the first time
▶️ case 3: with single dependency
    - useEffect(()=>{},[count])
    - it will execute only when count updates
▶️ case 4: with multiple dependency
    - useEffect(()=>{},[count, fetchdata, items])
    - it will executes every time when ever anyone of then updates

# ✅ useMemo()
- It is React hook that optimses performances by memoizing expensive calculation
- It prevents unnecessary calculation by storing the computated value in an internal cache
- It re-computes only if depency canges otherwise it reutrns value from cache memory
- If component upmounts, before unmounting it clears cache memory
▶️ Cache
- cache is temporary storage system that stores frequently accessed data to make future access fater.
- Instead of recalculating or fetching data repeatedly , cache returns stored result instantly to improve performace of code.
- Types of cache
1. Memory cache(RAM)
2. Browser cache : web browser store image, css and js locally for fater page load
3. Database cache
4. CDN cache (Content Delivery Network): it store image , video in Global server for faster delivery 

▶️ Syntax of useMemo()
    const memoizedValue = useMemo(()=> computedExpensiveValue(a,b),[a,b]);
    - computedExpensiveValue(a,b) : function thats runs only a or b changes
    - [a, b] : Dependency array, ensures re-calculation when dependency change
▶️ when to use useMemo()
- in case filter , dealing with last data  and heaby loop

# useRef()
- It is React hook that creates mutable reference
- It stores value and access elements withou causing the page reload and updates
- It can use for Referencing Dom element like getElementByID
- It keep track the previous value between renders
- Syntax: 
    const myRef = useRef(username)
    myRef.current : holds the value
    Changin myRef.current does not cause re-render