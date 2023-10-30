import React, { Fragment } from 'react'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import pizza from '@/assets/pic/pizza2.png'

const listP = [
    {id:123123123,name:'SALMON ',price:'12',img:pizza,},
    {id:123123123,name:'SALMON ',price:'12',img:pizza,},
]

function ProductShow() {
    return(
        listP.map((item,key)=>(
            <Fragment key={key}>
                <div className='col-span-7 w-full h-fit border-t-2'/>
                
                <p className='col-span-1'>{key + 1}</p>
                <Image className='w-1/2 col-span-1' src={item.img} alt='image'/>
                <p className='col-span-1'>{item.id}</p>
                <p className='col-span-2'>{item.name}</p>
                <p className='col-span-1'>{item.price}</p>
                <div className='col-span-2 flex justify-evenly w-full'>
                    <button className='h-8 pl-6 pr-6 bg-green-700 text-white rounded-sm duration-700 hover:shadow-xl hover:ring-2 ring-green-700'>Edit</button>
                    <button className='h-8 pl-6 pr-6 bg-red-700 text-white rounded-sm duration-700 hover:shadow-xl hover:ring-2 ring-red-700'>Delete</button>
                </div>
            </Fragment>
        ))
    )
}

export default function Admin() {
    return (
        <>
            <Navbar />

            <div className='p-8 gap-12 grid'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl font-bold'>Product</p>
                    <p className='text-md text-orange-600 p-2 px-6 rounded-lg bg-orange-100'>Add New</p>
                </div>

                <div className='grid grid-cols-8 content-center gap-4 items-center justify-items-center'>
                    <p className='col-span-1'>counter</p>
                    <p className='col-span-1'>Image</p>
                    <p className='col-span-1'>Id</p>
                    <p className='col-span-2'>Title</p>
                    <p className='col-span-1'>price</p>
                    <p className='col-span-2 text-center'>Action</p>
                    <ProductShow/>
                </div>

            <div></div>
            </div>
        </>
    )
}
