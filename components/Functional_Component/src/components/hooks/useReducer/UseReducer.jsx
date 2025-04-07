import React, { useReducer } from 'react'

const initialState  = {count: 0}
const reducerFunction = (state, action)=>{
    switch(action.type){
        case 'increment':
            return{count: state.count + 1}
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
        <h1>useReducer hook</h1>
        <h2>Count: {state.count}</h2>
        <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
    </div>
  )
}

export default UseReducer