import React, { createContext } from 'react'
import FirstCompo from './FirstCompo';
import SecondComp from './SecondComp';

export const GlobalContext = createContext();

const ContextApi = () => {
    const database = [
        {id: 1, name:"kumar", age:90},
        {id: 2, name:"kumar1", age:91},
        {id: 3, name:"kumar2", age:92}, 
        {id: 4, name:"kumar3", age:93},
        {id: 5, name:"kumar4", age:94},
        {id: 6, name:"kumar5", age:95},
        {id: 7, name:"kumar6", age:96},
    ]
  return (
    <GlobalContext.Provider value={database}>
        <FirstCompo/>
        <SecondComp/>
</GlobalContext.Provider>
  )
}

export default ContextApi