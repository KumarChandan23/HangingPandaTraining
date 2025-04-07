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

✅ Basic React Hooks : 
- useState(), useEffect(), useContext()

✅ Essential React Hooks: 
- useRef, useReducere(), useCallback(),useMemo(), useImperativeHandle(), useLayoutEffect(), useDebugValue()

✅ React 18+ Hooks (Experimental / Stable)
- useId, useTransition(), useDeferredValue(), useSyncExternalStore(), useInsertionEffect()

✅ Custom Hooks (You Can Create)
- useFetch(url), useAuth(), useForm(), useToggle(), useLocalStorage(), useClickOutside(), useMediaQuery()

✅ React Router Hooks
- useNavigate(), useParams(), useLocation(), useSearchParams(), useOutletContext()

✅ React Form Libraries (Popular Hooks)
- useFormik(), useForm(), useQuery(), useMutation()

▶️ Which Hooks Should You Master First?
    Must Know (Beginner–Intermediate): useState, useEffect, useContext
    Advance/Optimization: useReducer, useCallback, useMemo, useRef
    Pro: useLayoutEffect, useImperativeHandle, useSyncExternalStore, useTransition

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



# ✅ useRef()
- It is React hook that creates mutable reference
- It stores value and access elements withou causing the page reload and updates
- It can use for Referencing Dom element like getElementByID
- It keep track the previous value between renders
- Syntax: 
    const myRef = useRef(username)
    myRef.current : holds the value
    Changin myRef.current does not cause re-render

# useImperativeHandle()
- It is react hook used with forward ref to customize the instance value that is exposed to the parent component when using ref.
- Syntax: 
    useImperativeHandle(ref, () => {
    return {
        yourCustomMethod: () => { ... }
    }
    }, [dependencies])


# ✅ memo() 
- In React memo is higher order component that memoize the component.
- It prevents unnecessary re-renders by only re-rendering if prop changes
- Syntax: 
       - const momoizedComponent = React.memo(Component)
       - export default React.memo(MyComponent);
       - any one of them
▶️ How it works
 When a component is wrapped with React.memo()
 - It compares previous props with new props
 - If props have not changed then it does not re-renders component
 - If props have changed then it re-renders the component


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

# ✅ useCallback() 
- It is React hooks used to momoize functions.
- It prevents function from being recreated on every render unless dependency changes
- This is usefull for performance optimization, 
- Especially when passing function as props to child component that rely on referencial equality to avoid unnecessary re-renders.
- Syntax: 
        - const memoizedCallback = useCallback(()=>{ },[dependencies])
        - ()=>{} : momoized function
        - [dependency] : array dependency, if any one then them changes function will be rec-created each  time
▶️ Why use useCallback()?
- whithout useCallback function will be re-created every time when component re-renders
- whit useCallback function will only recreated when dependency array changes 

# ✅ Difference between memo(), useMemo() and useCallback()
▶️ meme() : for component
- const memoizeCompo = React.memo(component)
- Prevents a functional component from re-rendering unless its props change even parent compo re-renders.
- Use it when child component need to  re-render only when props change

▶️ useMemo() : for memoizing values
- const memoizedValue = useMemo(() => computeSomething(a, b), [a, b]);
- It return memoized resutl of a function
- It runs the function only if dependency changes
- It is usefull when we are performing expensive calculation or looping through multiple times
- It is usefull when we want to aviod re-calculation for same value

▶️ useCallback() : for memoizing function
- const memoizedFn = useCallback(() => { doSomething(); }, [deps]);
- It returns same function reference unless dependency changes
- We pass function as props to React.momo() component
- It is usefull when we want to prevent unnecessary re-renders due to change in function reference

▶️ Combine Example
    const Parent = () => {
    const [count, setCount] = useState(0);

    const memoizedFn = useCallback(() => {
        console.log("child clicked");
    }, []);

    const expensive = useMemo(() => heavyComputation(count), [count]);

    return (
        <>
        <MemoizedChild onClick={memoizedFn} />
        <div>{expensive}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
    };

    const MemoizedChild = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click</button>;
    });


# ✅ useReducer()

- It is React hook that works like mini Redux inside our component
- It is an alternaivte to useState() hook
- It is usefull when
    > Complex Forms (Multiple Fields + Logic)
    > Todo List / Shopping Cart / Multi-step Wizards for feature like add, update, delete and reset
    > Managing Global-ish State Without Context API. example like Quize app (current querion, user, answer, timer, score)
    > Undo/Redo Functionality. like: {past: [],present: currentValue,future: []}
    > Loading/Error/Success States in Async Calls
        ▶️ with useState
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const [data, setData] = useState(null)
        ▶️ with useReducer
        switch (action.type) {
                case 'FETCH_INIT':
                case 'FETCH_SUCCESS':
                case 'FETCH_ERROR':
                }

- Syntax:
    const [state, dispatch] = useReducer(reducer, initialValue)
    > state : current state
    > dispatch : a function to send an action to reducer
    > reducer : a function that descrives how state changes
    > initialValue : the starting state value



# ✅ Context API
- It is built way in react to share global data between components without having to pass props manually at every level
- it can share data like useifo, theme, language and cart state etc...

▶️ How it works
1. create context
    export const UserContext = createContext();
2. provide context
     const user = {name: "kumar", age:"89", gender:"other"}
     <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
3. consume context
    const user = useContext(UserContext);

# ✅ Custom hook
- It is javaScript function that start with use and lets you reuse statefull logic accross multiple components. 
- It is usefull when multiple component needs same login 
- custom hook keep our code clean and readable
- It avoid deplication of code
- It separates logic form UI
- Syntax: 
        function useCustomehook(){};
▶️ when to use it
1. useFetch(): fetching data using API
2. useAuth() : user Authentication
3. useDebounce(): Handle debouncing input
4. useCart(): Centeralize cart login like add, revove, reset, etc..


# Tailwind CSS

▶️ Installation 
- create vite react project
- npm install tailwindcss @tailwindcss/vite : in terminal
- create file with vite.config.js 
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })
- create globle CSS file and pase this : @import "tailwindcss";
- npm run dev

✅ Layout
# Container Break point
- sm : 640px
- md : 768px
- lg : 1024px
- xl : 1280px
- 2xl : 1536px

- we can override its break point
// tailwind.config.js
module.exports = {
  theme: 
    container: {
      center: true,
      padding: '1rem', // adds horizontal padding
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
};

# Box-sizing
- box-content: it add paddig and margin outsite of box and increases size.
- box-border : padding and border are include inside box. it does not increase size.

# Display
- inline: default. it contains context width and height. and does not access width and height.
- inline-block: it behaves like inline and accepts height and width.
- block: it occupies complete with of device