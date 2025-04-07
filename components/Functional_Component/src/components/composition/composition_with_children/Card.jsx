import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        backgroundColor: "#f9f9f9",}}>
        {children}
    </div>
  )
}

export default Card