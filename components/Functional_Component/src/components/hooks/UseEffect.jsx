import React, { useEffect } from 'react'

const UseEffect = () => {
    const [state, setState] = React.useState(0);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log("This will execute after every render");
    })
    useEffect(() => {
        console.log("This will execute only once after the first render");
    }, [])
    useEffect(() => {
        console.log("This will execute only when count changes", count);
    }, [count])
    useEffect(() => {
        console.log("This will execute when state OR count changes", state);
    }, [state, count])
  return (
    <div>
        <h1>useEffect Hook example</h1>
        <h2>Count: {count}</h2>
        <h2>State: {state}</h2>
        <button onClick={()=> setCount(count + 1)}>Increase Count</button>
        <button onClick={()=> setCount(count <= 0 ? 0 : count - 1)}>Decrease Count</button>
        <button onClick={()=> setCount(0)}>Reset Count</button>
        <button onClick={()=> setState(state + 1)}>Increase State</button>
        <button onClick={()=> setState(state <= 0 ? 0 : state - 1)}>Decrease State</button>
        <button onClick={()=> setState(0)}>Reset State</button>
        <p>Check console for useEffect logs</p>
    </div>
  )
}

export default UseEffect