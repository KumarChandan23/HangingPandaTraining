import React from 'react'

const WithoutUseMemo = () => {
    const [count, setCount] = React.useState(0)

    const expensiveComputation = () => {
        console.log("Expensive computation is running")
        let sum = 0
        for(let i = 0; i < 1000000000; i++){
            sum += i
        }
        return sum
    }
    const result = expensiveComputation()
    console.log("Result: ", result)
  return (
    <div>
        <h1>Without useMemo</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=> setCount(count + 1)}>count</button>
        <p>Check console for logs</p>
    </div>
  )
}

export default WithoutUseMemo