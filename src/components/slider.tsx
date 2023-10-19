import React from 'react'
import Image from 'next/image'
import {GrPrevious, GrNext} from 'react-icons/gr'
import pizza1 from '../assets/pic/pizza1.png'

const list = [
    {name:'PIZZA ',desc:'Hot & spicy',offer:'50% OFF ORDER NOW',img:pizza1},
]

function SliderComponnet() {
    return (
        list.map((item,key)=>(
            <div className="flex justify-evenly items-center p-[4rem] h-full flex-col md:flex-row" key={key}>
                <div className="w-1/2 flex flex-col center">
                    <span className='text-white'>
                        <p className='text-4xl'>{item.desc}</p>
                        <p className='text-6xl'>{item.name}</p>
                        <p className='text-3xl w-[12rem] text-center underline'>{item.offer}</p>
                    </span>
                </div>
                <div className="w-1/2 center">
                    <Image src={item.img} alt='pizza image' className='w-full'/>
                </div>
            </div>
        ))
    )
}

export default function Slider() {
  return (
    <div id="indicators-carousel" className="relative w-full h-[95vh] orange" data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <SliderComponnet/>
        {/* <!-- Slider indicators --> */}
        {/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div> */}
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className='p-2 bg-slate-300/40 hover:bg-slate-100/40 rounded-full '>
                <GrPrevious className='text-2xl'/>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-next>
            <span className='p-2 bg-slate-300/40 hover:bg-slate-100/40 rounded-full '>
                <GrNext className='text-2xl'/>
            </span>
        </button>
    </div>
  )
}
