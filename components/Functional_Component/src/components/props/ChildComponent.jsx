import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h1>ChildComponent</h1>
        <h2>{props.greet}</h2>
        <p>Name: {props.emp.name}</p>
        <p>Age: {props.emp.age}</p>
        <p>City: {props.emp.city}</p>
    </div>
  )
}

export default ChildComponent