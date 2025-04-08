import React from 'react'

const Flex = () => {
  return (
    <div>
        <h1 className='text-center bg-blue-500 text-white'>Flex box</h1>
        <div className='flex gap-4'>
            <div className='bg-amber-400 p-2 h-20 w-30 order-3'>order 3</div>
            <div className='bg-amber-400 p-2 h-20 w-30 flex-grow order-4'>order 4</div>
            <div className='bg-amber-400 p-2 h-20 w-30 basis-sm shrink-0 order-1'>order 1</div>
            <div className='bg-amber-400 p-2 h-20 w-30 order-2'>order 2</div>
            <div className='bg-amber-400 p-2 h-20 w-30 flex-grow shrink'>box5</div>
        </div>
    </div>
  )
}

export default Flex