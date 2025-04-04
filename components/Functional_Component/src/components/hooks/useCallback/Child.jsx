import React from 'react'

const Child =React.memo(({onClick}) => {
    console.log('Child Rendered')
  return (
    <div>Child
        <button onClick={onClick}>Click me</button>
    </div>
  )
})

export default Child