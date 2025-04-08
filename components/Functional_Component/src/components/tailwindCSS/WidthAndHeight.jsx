import React from 'react'

const WidthAndHeight = () => {
  return (
    <div>
        <h1 className='bg-blue-300 text-2xl text-white text-center'>Width</h1>
        <div className='w-96 bg-amber-300 mt-1 text-center'>w-96 (You provde only number)</div>
        <div className='w-48 bg-amber-300 mt-1 text-center'>w-96</div>
        <div className='w-1/2 bg-amber-300 mt-1 text-center'>w-1/2</div>
        <div className='w-2/3 bg-amber-300 mt-1 text-center'>w-2/3</div>
        <div className='w-full bg-amber-300 mt-1 text-center'>w-full</div>
        <div className='w-sm bg-amber-300 mt-1 text-center'>w-sm</div>
        <div className='w-xs bg-amber-300 mt-1 text-center'>w-xs</div>
        <div className='w-2xs bg-amber-300 mt-1 text-center'>w-2xs</div>
        <div className='w-3xs bg-amber-300 mt-1 text-center'>w-3xs</div>
        <div className='w-[200px] bg-amber-300 mt-1 text-center'>w-[200px] custome</div>

        <h1 className='bg-blue-300 text-2xl text-center text-white'>Min and Max Width</h1>
        <div className='max-w-90 bg-amber-300 mt-1 text-center'>mix-w-90</div>
        <div className='man-w-90 bg-amber-300 mt-1 text-center'>min-w-90</div>

        <h1 className='bg-blue-300 text-2xl text-white text-center'>HEIGHT</h1>
        <div className='h-50'>
        <div className='h-10 bg-amber-300 mt-1 text-center'>h-(number)</div>
        <div className='h-full bg-amber-300 mt-1 text-center'>h-full</div>
        <div className='h-1/5 bg-amber-300 mt-1 text-center'>h-1/5</div>
        <div className='h-dvh bg-amber-300 mt-1 text-center'>h-dvh (dynamic view port Height)</div>
        <div className='h-lvh bg-amber-300 mt-1 text-center'>h-lvh (large viewport Height)</div>
        <div className='h-svh bg-amber-300 mt-1 text-center'>h-svh (small wiewport Height)</div>
        </div>

        <h1 className='bg-blue-300 text-2xl text-white text-center'>Size</h1>
        <div>
        <div className='size-20 bg-indigo-300 mt-1 text-center'>size 20px</div>
        <div className='size-40 bg-indigo-300 mt-1 text-center'>size 40px</div>
        <div className='size-[15rem] bg-indigo-300 mt-1 text-center'>size[15rem]</div>
        </div>
    </div>
  )
}

export default WidthAndHeight