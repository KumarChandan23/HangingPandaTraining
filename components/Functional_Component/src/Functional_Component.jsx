import React from 'react'


const Functional_Component = () => {

    const codeString = `const componentName = () => { return "Functional Component" }`
  return (
    <div>
        <h1>Funcitonal component Example</h1>
        <code>
            {codeString}
        </code>
    </div>
  )
}

export default Functional_Component