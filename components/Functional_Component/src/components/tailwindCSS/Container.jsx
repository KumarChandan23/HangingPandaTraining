import React from 'react'

const Container = () => {
  return (
    <div>
        <h1 className='bg-green-600 text-2xl text-white text-center md:border-4 border-red-900 p-1 box-content container'>Container</h1>
      {/* Display */}
        <span className='inline bg-orange-500 w-35 mx-5'>text1</span>
        <span className='inline-block w-33 bg-blue-600 my-4'>text2</span>
        <span className='block mt-6'>text2</span>
    </div>
  )
}

export default Container