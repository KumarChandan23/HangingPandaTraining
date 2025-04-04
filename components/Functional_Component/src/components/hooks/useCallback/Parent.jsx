import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
  console.log('Parent Rendered')
  const [count, setCount] = useState(0)
  const handlerender = useCallback(()=>{console.log("reder only once")},[count]);
  return (
    <div>Parent
      <Child onClick={handlerender}  />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default Parent