import React from 'react'

const Container = () => {
  return (
    <div>
      <h1 className='bg-green-600 text-2xl text-white text-center md:border-4 border-red-900 p-1 box-content container'>Container</h1>
      {/* Display */}
      <span className='inline bg-orange-500 w-35 mx-5'>text1</span>
      <span className='float-center mt-6'>text2</span>
      <span className='inline-block w-33 bg-blue-600 my-4'>text2</span>
      {/* flex */}
      <ul className='grid gap-4 justify-items-stretch bg-amber-600'>
        <li className=''>text1</li>
        <li className='self-center bg-green-200 w-40'>self test</li>
      </ul>
      <ul className="flex gap-4 items-stretch bg-amber-600 h-32">
        <li className="self-center bg-green-200 ">self test1</li>
        <li>text3</li>
        <li>text4</li>
      </ul>

      <ul className="grid grid-cols-3 gap-4">
        <li className="bg-blue-400 text-white p-2">text1</li>
        <li className="bg-blue-400 text-white p-2">text2</li>
        <li className="bg-blue-400 text-white row-span-3 p-2">text3</li>
        <li className="bg-blue-400 text-white p-2">text4</li>

        {/* This li spans all 3 columns and contains a nested grid */}
        <li className="bg-blue-400 text-white col-span-3 grid grid-cols-5 gap-2 p-2">
          <p className="bg-red-300 col-span-2 p-2">text1</p>
          <p className="bg-red-300 row-start-2 p-2">text2</p>
          <p className="bg-red-300 p-2">text3</p>
          <p className="bg-red-300 p-2">text5</p>
          <p className="bg-red-300 p-2">text6</p>
          <p className="bg-red-300 p-2">text7</p>
          <p className="bg-red-300 p-2">text8</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
          <p className="bg-red-300 p-2">text4</p>
        </li>

        <li className="bg-blue-400 text-white p-2">text5</li>
        <li className="bg-blue-400 text-white p-2">text6</li>
      </ul> 

      <div className='bg-pink-400 grid gap-3 grid-cols-5 p-2'>
        <p className='bg-green-300 text-white p-2 row-span-5'>text1</p>
        <p className='bg-green-300 text-white p-2'>text2</p>
        <p className='bg-green-300 text-white p-2 col-span-3 grid gap-2 grid-cols-2'>
          <h2 className='bg-amber-600 p-2'>gird 1</h2>
          <h2 className='bg-amber-600 p-2'>gird 2</h2>
          <h2 className='bg-amber-600 p-2'>gird 3</h2>
          <h2 className='bg-amber-600 p-2'>gird 4</h2>
          <h2 className='bg-amber-600 p-2'>gird 5</h2>
          <h2 className='bg-amber-600 p-2'>gird 6</h2>
          <h2 className='bg-amber-600 p-2'>gird 7</h2>
          <h2 className='bg-amber-600 p-2'>gird 8</h2>
          <h2 className='bg-amber-600 p-2 item-center'>gird 9</h2>
        </p>
        <p className='bg-green-300 text-white p-2'>text4</p>
        <p className='bg-green-300 text-white p-2'>text5</p>
        <p className='bg-green-300 text-white p-2'>text6</p>
      </div>

      <div className='h-120'>

      </div>


    </div>
  )
}

export default Container