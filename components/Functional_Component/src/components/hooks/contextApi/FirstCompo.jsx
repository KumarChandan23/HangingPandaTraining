import React, { useContext } from 'react'
import { GlobalContext } from './ContextApi'

const FirstCompo = () => {
    const data = useContext(GlobalContext);
    console.log(data)
  return (
    <div>FirstCompo</div>
  )
}

export default FirstCompo