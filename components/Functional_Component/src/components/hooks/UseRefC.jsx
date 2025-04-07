import React, { useRef } from 'react'

const UseRefC = () => {

    const inputRef = React.useRef(null);
    console.log("redner")
    const Focus = ()=>{
        // document.getElementById("input").focus();
        // document.getElementById("input").style.backgroundColor = "lightblue"
        if(inputRef.current){
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = "lightblue"
        }
    }
  return (
    <div>
        <h1>Access Dom Element</h1>
        <input type="text" name="" id="input" ref={inputRef} />
        <button onClick={Focus}>click</button> to Foucs input box
        </div>
  )
}

export default UseRefC