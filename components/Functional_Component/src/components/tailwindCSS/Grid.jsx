import React from 'react'

const Grid = () => {
    return (
        <div>
            <h1 className='bg-blue-500 text-white text-center'>Grid</h1>
            <div className='grid gap-2 grid-cols-3'>
                <div className='bg-orange-400 text-whtie text-center  p-3 col-span-3 grid grid-cols-subgrid gap-4'>
                    <div className='bg-indigo-500 p-2'>child1</div>
                    <div className='bg-indigo-500 p-2 col-span-full col-start-2'>child2</div>
                    <div className='bg-indigo-500 p-2'>child3</div>
                    <div className='bg-indigo-500 p-2'>child3</div>
                    <div className='bg-indigo-500 p-2'>child3</div>
                </div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid2</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid3</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid4</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid5</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
            </div>
            <div className='grid gap-2 grid-flow-row-dense grid-rows-3 mt-4'>
                <div className='bg-orange-400 text-whtie text-center p-3 row-span-full col-span-3 grid grid-cols-subgrid gap-4 content-normal place-content-center h-60'>
                    <div className='bg-indigo-500 p-2'>child1</div>
                    <div className='bg-indigo-500 p-2 col-span col-start-2'>child2</div>
                    <div className='bg-indigo-500 p-2'>child3</div>
                    <div className='bg-indigo-500 p-2 '>child3</div>
                    {/* <div className='bg-indigo-500 p-2'>child3</div> */}
                </div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid2</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid3</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid4</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid5</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center w-40 p-3'>Grid6</div>
            </div>
            <div className='grid place-content-between grid-cols-2  gap-2   bg-blue-600 h-100'>
                <div className='bg-orange-400 text-white text-center p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center p-3'>Grid6</div>
                <div className='bg-orange-400 text-white text-center p-3'>Grid6</div>
            </div>
        </div>
    )
}

export default Grid