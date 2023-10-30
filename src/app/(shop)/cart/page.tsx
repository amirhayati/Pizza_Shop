'use client'

import React, {Fragment} from 'react'
import Image from 'next/image'
import { useCart } from "@/context/CartContext";
import {AiOutlineClose} from 'react-icons/ai'

export default function Cart() {

    const { cartItems, toggleCartItemQuantity, onRemove, totalPrice } = useCart();

    const handlerDecBtn = (id:Number) => {
        toggleCartItemQuantity(id, "dec");
    }

    const handlerIncBtn = (id:Number) => {
        toggleCartItemQuantity(id, "inc");
    }

    const handlerDeleteBox = (pid:Number) => {
        setTimeout(() => {
            onRemove(pid)  
        }, 100);
    }

    function CartList() {
        return(
            cartItems.map((item:any,key:number)=>(
                <Fragment key={key}>
                    <Image src={item.img} alt='pizza' className='w-16 '/>
                    <p className='text-xs sm:text-lg text-orange-700 col-span-2 text-center'>{item.name}</p>
                    <p className='text-xs sm:text-lg'>{item.size === 's' ? "Small" : item.size === 'm' ? "Medium" : "Large"}</p>
                    <p className='text-xs sm:text-lg'>{!item.sauce ? "---" : item.sauce}</p>
                    <p className='text-xs sm:text-lg'>${item.price}</p>
                    <div className='flex flex-row'>
                        <p className='pl-2 pr-2 p-1 w-fit h-fit bg-gray-200 rounded-l-lg ring-1 ring-gray-400 hover:bg-gray-100 duration-700 cursor-pointer select-none' onClick={()=> handlerDecBtn(item.pid)}>{'<'}</p>
                        <p className='pl-2 pr-2 p-1 pt-[.40rem] w-fit ring-1 ring-gray-400 bg-gray-100 cursor-auto text-sm text-center select-none'>{item.count}</p>
                        <p className='pl-2 pr-2 p-1 w-fit h-fit bg-gray-200 rounded-r-lg ring-1 ring-gray-400 hover:bg-gray-100 duration-700 cursor-pointer select-none' onClick={()=> handlerIncBtn(item.pid)}>{'>'}</p>
                    </div>
                    <p className='text-xs sm:text-lg'>${item.price * item.count}</p>
                    <div className='p-1 cursor-pointer ring-red-500 hover:ring-1' onClick={() => handlerDeleteBox(item.pid)}>
                        <AiOutlineClose size='1.3rem' color='red' />
                    </div>
                </Fragment>
            ))
        )
    }

    return (
        <div>
            <div className='w-full flex flex-col lg:flex-row px-2 md:px-24 py-6 gap-8 lg:gap-2'>

                {
                    cartItems.length > 0 ?
                        <div className='w-full lg:w-2/3 grid grid-cols-9 center gap-4 place-items-center'>
                            <p className='font-bold text-sm'>Product</p>
                            <p className='font-bold text-sm col-span-2'>Name</p>
                            <p className='font-bold text-sm'>Size</p>
                            <p className='font-bold text-sm'>Sauce</p>
                            <p className='font-bold text-sm'>Price</p>
                            <p className='font-bold text-sm'>Quantity</p>
                            <p className='font-bold text-sm'>Total</p>
                            <p className='font-bold text-sm'>Del</p>

                            <CartList />
                        </div>
                    :
                        <div className='w-full flex center'>
                            <p className='text-xl font-bold'>cart empty</p>
                        </div>
                }

                <div className='w-[16rem] lg:w-1/3 '>
                    <div className='w-full h-fit bg-footer flex flex-col gap-3 p-6'>
                        <p className='text-white font-bold'>CART TOTAL</p>

                        <div>
                            <span className='flex flex-row gap-2 text-white'>
                                <p className='text-xs font-bold'>Subtotal:</p>
                                <p className='text-xs'>${totalPrice}</p>
                            </span>
                            <span className='flex flex-row gap-2 text-white'>
                                <p className='text-xs font-bold'>Discount:</p>
                                <p className='text-xs'>${'0.00'}</p>
                            </span>
                            <span className='flex flex-row gap-2 text-white'>
                                <p className='text-xs font-bold'>Total:</p>
                                <p className='text-xs'>${totalPrice}</p>
                            </span>
                        </div>
                        
                        <button className='bg-white p-2 text-orange-700 text-xs hover:bg-slate-200 hover:font-bold duration-500'>CASH ON DELIVERY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



