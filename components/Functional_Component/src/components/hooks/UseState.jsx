import React, { useState } from 'react'

const UseState = () => {
    const [state, setState] = useState(0);
  return (
    <div>
        <h1>Use State Example</h1>
        <h2>Count: {state}</h2>
        <button onClick={()=> setState(state + 1)}>Increase</button>
        <button onClick={()=> setState(preState=> preState <=0 ? 0 : preState - 1)}>Decrease</button>
        <button onClick={()=> setState(0) }>Reset</button>
    </div>
  )
}

export default UseState
