import React from 'react'
import Gamming from '../../assets/gamming.jpg'
const Border = () => {
    return (
        <div className='p-2 text-'>
            <h1>Border Style</h1>
            <div className='flex gap-5 w-full'>
                <p className='border-1 border-solid mb-1 px-3 py-2'>Solid</p>
                <p className='border-4 border-dotted mb-1 px-3 py-2'>Dotted</p>
                <p className='border-3 border-double mb-1 px-3 py-2'>Double</p>
                <p className='border-4 border-dashed mb-1 px-3 py-2'>Dashed</p>
            </div>
            <h1>Border Color</h1>
            <p className='border-2 border-red-600'>Red border</p>
            <h1>Border Radius</h1>
            <p className='border border-blue-500 rounded'>Border radius 0.25rem</p>

            <div className='flex flex-wrap gap-4'>

                <p className='border border-blue-500 rounded-sm w-30 mt-2'>Border radius small</p>
                <p className='border border-blue-500 rounded-md w-30 mt-2'>Border radius medium</p>
                <p className='border border-blue-500 rounded-lg w-30 mt-2'>Border radius large</p>
                <p className='border border-blue-500 rounded-xl w-30 mt-2'>Border radius extra lasge</p>
                <p className='border border-blue-500 rounded-2xl w-30 mt-2'>Border radius extra lasge</p>
                <p className='border border-blue-500 rounded-3xl w-30 mt-2'>Border radius extra lasge</p>
                <p className='border border-blue-500 rounded-full w-30  mt-2'>Border radius full</p>
                <p className='border border-blue-500 rounded-full w-30 h-30 mt-2 flex items-center justify-center'>Circle with br-full and same H and W</p>
            </div>
            <div className='flex gap-5'>

                <p className='p-2 border border-green-400 rounded-t mt-2 w-20 dark:text-white'>Border Top radius</p>
                <p className='p-2 border border-green-400 rounded-b mt-2 w-20'>Border Bottom adius</p>
                <p className='p-2 border border-green-400 rounded-l mt-2 w-20'>Border Left adius</p>
                <p className='p-2 border border-green-400 rounded-r mt-2 w-20'>Border Right adius</p>
                <p className='p-2 border border-green-400 rounded-tr mt-2 w-20'>Border Top Right adius</p>
                <p className='p-2 border border-green-400 rounded-bl-xl mt-2 w-20'>Border Top Right adius</p>
            </div>
            <h1>use of clear property</h1>
            <article>
                <img class="float-right w-40 h-40" src={Gamming} />
                <p class="clear-left text-justify ">Maybe Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi possimus eos atque rem voluptatum aut, veniam minus illo architecto optio magni vero obcaecati placeat quos, repellat velit ullam nostrum expedita.
                Commodi deserunt excepturi autem sunt repudiandae ea natus quia quibusdam dolorum eos enim quae vero iste distinctio ratione aut, officia reiciendis quaerat fuga quisquam vitae est! Voluptatem, doloribus distinctio. Voluptatem.
                Repellendus dolorem maxime, non eius excepturi quae porro tempora rem consectetur dolorum incidunt perferendis dolor molestiae quibusdam dignissimos placeat sed minus cupiditate, reiciendis, quam officiis laudantium provident illo distinctio! Suscipit.
                Ipsam consequatur debitis perspiciatis earum, assumenda distinctio necessitatibus provident a officia quas cumque velit, accusantium nesciunt eligendi ab cupiditate perferendis, qui eos. Earum officiis iure, obcaecati cum a similique cupiditate.
                Laudantium nisi reprehenderit excepturi ipsa magnam officia possimus repellat, doloribus tempore deleniti eius magni. Quibusdam minima quia fugiat laudantium nam. Nam cupiditate enim minus quia praesentium nemo quis illo delectus! we can live without libraries...</p>
            </article>
            <div className='mt-4'>
                <img src={Gamming} alt="" className='float-left w-40 h-40'/>
                <p clear-right>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum voluptate illo. Qui, optio. Adipisci ullam ipsum, soluta at nobis eaque maiores totam ab, reiciendis quod fugit? Nesciunt, exercitationem enim.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere, sint eius aspernatur repellat laborum corporis dolores. Quas voluptates quaerat voluptatibus itaque delectus veritatis, a rerum deserunt ullam placeat nemo.
                    Non voluptatibus omnis delectus accusamus ad nobis optio quasi asperiores veritatis at magnam saepe consequatur quis hic eaque sunt, necessitatibus dignissimos perferendis iste blanditiis recusandae beatae ratione sint. Dolorem, voluptatem.
                    Voluptatem dignissimos, laudantium veritatis non fugit alias. Ex similique ipsam, nobis nisi modi nulla a voluptatem consequuntur dolore neque, maiores voluptates et totam doloremque quisquam autem tempore optio quaerat quidem.
                    Repellendus fuga debitis ea exercitationem eos neque officiis vitae nam iusto perferendis molestias temporibus, veritatis nobis reiciendis eligendi, est libero expedita optio. Blanditiis voluptatibus reiciendis quisquam ea quo commodi ratione!
                </p>
            </div>
            <div className='h-20 w-50 border-1 overflow-scroll'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolor veniam? Facere natus sed, asperiores temporibus neque laudantium accusantium mollitia quis aperiam eaque nulla provident dignissimos quia? Recusandae, optio inventore!
            </div>
            <div className='h-20 w-30 border-1 overflow-clip'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolor veniam? Facere natus sed, asperiores temporibus neque laudantium accusantium mollitia quis aperiam eaque nulla provident dignissimos quia? Recusandae, optio inventore!
            </div>
            <h1>name</h1>

        </div >
    )
}

export default Border