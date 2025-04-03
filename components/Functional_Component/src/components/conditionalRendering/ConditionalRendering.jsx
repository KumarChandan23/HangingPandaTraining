import React from 'react'

const ConditionalRendering = () => {
    const user = {
        name: "Mohan Kumar Sharma",
        age: 25,
        city: "Jaipur"
    }

  return (
    <div>
        <h1>Conditional Rendering</h1>
        {user.age > 18 ? 
        <>
        <h2>Welcome {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <p>yes, Your are allowed to ride car.</p>
        </>  
        : 
        <>
        <h2>Sorry {user.name}</h2>
        <h2>Age: {user.age} is less than 18</h2>
        <p>No, Your are not allowed to ride car.</p>
        </>  
}
    </div>
  )
}

export default ConditionalRendering