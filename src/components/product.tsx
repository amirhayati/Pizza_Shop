import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pizza from '../assets/pic/pizza2.png'
import {list} from '../assets/data/list'


function ProductItem() {
    return(
        list.map((item, key)=>(
            <Link 
                className='w-full flex-col flex center gap-3 cursor-pointer hover:bg-orange-100 p-4 duration-500'
                href={{
                    pathname: `/${item.id}`,
                }}
                key={key}
            >
                <Image src={item.img} alt={item.name} className='w-5/6' />
                <p className='text-orange text-lg font-bold'>{item.name}</p>
                <p className='font-bold'>{item.s_price} $</p>
                <p className='text-center text-gray-600'>{item.desc}</p>
            </Link>
        ))
    )
}

export default function Product() {
  return (
    <div className='w-full p-12 gap-8 flex center flex-col'>
        <h1 className='text-3xl'>THE BEST PIZZA IN TOWN</h1>
        <h3 className='text-xl text-gray-600 md:w-4/6 w-full text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <div className='w-2/3 sm:w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8'>
            <ProductItem />
        </div>
    </div>
  )
}


