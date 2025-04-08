import React from 'react'

const PseudoClasses = () => {
  return (
    <div className='text-center p-2'>
        <button className='bg-violet-500 text-xl text-white p-2 focus:outline-2 focus:outline-red-600 focus:outline-offset-2 hover:bg-amber-500 rounded-full w-25 h-25'>Capsule</button>
        <p className='after::["kumar"]'>name:</p>
    </div>
  )
}

export default PseudoClasses