import React, { useContext } from 'react'
import { GlobalContext } from './ContextApi';

const SecondComp = () => {
    const data = useContext(GlobalContext);
    console.log(data);
  return (
    <div>SecondComp</div>
  )
}

export default SecondComp