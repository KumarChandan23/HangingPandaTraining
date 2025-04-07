import React from 'react'

const WithMemo = () => {
    const [count, setCount] = React.useState(0);
    const [number, setNumber] = React.useState(10);

    const memoizedValue = React.useMemo(() => {
        console.log("Expensive computation is running")
        let sum = 0
        for(let i = 0; i < 1000000000; i++){
            sum += i
        }
        return sum
    }, [number])
    console.log("Result: ", memoizedValue)
  return (
    <div>
        <h1>With Memo </h1>
        <h2>Count: {count}</h2>
        <button onClick={()=> setCount(count + 1)}>Count</button>
    </div>
  )
}

export default WithMemo