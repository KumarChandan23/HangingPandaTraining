import React from 'react'
import ChildComponent from './ChildComponent'

const PropComponent = () => {
    const greet = "Hello from ParentComponent"
    const emp = {
        name: "Mohan kumar Sharma",
        age: 25,
        city: "Jaipur"
    }
  return (
    <div >
        <ChildComponent greet={greet} emp={emp} />
    </div>
  )
}

export default PropComponent