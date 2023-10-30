"use client";

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext'
import pizza from '@/assets/pic/pizza2.png'
import {list} from '@/assets/data/list'

type ProductSize = "s" | "m" | "l" ;
type ProductSauce = "spicy"|"garlic" ;
type CartItemType = {
  id?: number;
  pid?: number;
  name?: string;
  desc?: string;
  img?: StaticImageData;
  count?: number;
  price?: number;
  size?: ProductSize;
  sauce?: ProductSauce;
};


export default function AboutProduct() {

  const {addToCart, incCount, decCount, count} = useCart();

  const newList = list[0];
  const [size,setSize] = useState<ProductSize>('s')
  const [price,setPrice] = useState<number>(parseInt(newList.s_price))
  const [sauce,setSauce] = useState<ProductSauce>()
  const [productId,setProductId] = useState<number>(1000)
 

  // const pathname = usePathname()
  // --- pathname is /id so use subString to access second params ---
  // const productId = Number(pathname.substring(1,2))

  const handlerAddToCard = () => {
    setProductId((prev)=> prev + 1)

    const newCartItem : CartItemType = {};

    newCartItem.id = newList.id;
    newCartItem.pid = productId;
    newCartItem.name = newList.name;
    newCartItem.desc = newList.desc;
    newCartItem.img = newList.img?newList.img:pizza;
    newCartItem.count = count;
    newCartItem.price = price;
    newCartItem.size = size;
    newCartItem.sauce = sauce;
    console.log(newCartItem)
    addToCart(newCartItem, count)
  }

  const handlerIncBtn = () => {
    incCount();
  }

  const handlerDecBtn = () => {
    count > 1 && decCount();
  }
  
  function selectSize(params:ProductSize) {
    setSize(params)

    switch (params) {
      case 's':
        setPrice(parseInt(newList.s_price))
        break;
      case 'm':
        setPrice(parseInt(newList.m_price))
        break;
      case 'l':
        setPrice(parseInt(newList.l_price))
        break;
    
      default:
        break;
    }
  }

  // useEffect(()=>{
  //   setCheckProductInArr(list.find((item) => item.id === productId))
  // },[])
  
  function selectSauce(params:ProductSauce) {
    sauce === params ? setSauce(undefined) : setSauce(params)
  }

  const finalPrice : number = price ? price : parseInt(newList.s_price);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full min-h-[80vh] md:gap-8 p-8'>

        <div className='flex-1 h-fit p-2 sm:p-16 flex center'>
          {/* <Image src={newList.img} alt='pic' className='md:w-full w-1/2'/> */}
        </div>

        <div className='flex-1 h-fit flex gap-4 flex-col p-8 md:p-0'>
          <p className='text-2xl font-bold text-orange drop-shadow-md'>{newList.name}</p>

          <p className='text-lg text-orange underline'>{finalPrice}$</p>
          
          <p className='text-sm text-gray-500'>{newList.desc}</p>
          
          <p className='text-lg font-bold'>Choose the size</p>

          <div className='flex flow-row flex-wrap gap-8 min-h-16'>
            <div className='w-12 h-fit'>
              <Image 
                src={pizza} 
                alt='pic' 
                className='px-1 object-contain mb-2 pb-2 border-b-2 duration-700 hover:border-orange-600 cursor-pointer' 
                style={size === 's' ? {borderColor: 'rgb(234 ,88 ,12)'} : {}}
                onClick={()=>selectSize('s')}
              />
              <p className='text-center rounded-full bg-green-800 text-white text-xs select-none'>Small</p>
            </div>
            <div className='w-14 h-fit'>
              <Image 
                src={pizza} 
                alt='pic' 
                className='px-1 object-contain mb-2 pb-2 border-b-2 duration-700 hover:border-orange-600 cursor-pointer'
                style={size === 'm' ? {borderColor: 'rgb(234 ,88 ,12)'} : {}}
                onClick={()=>selectSize('m')}
              />
              <p className='text-center rounded-full bg-green-800 text-white text-xs select-none'>Medium</p>
            </div>
            <div className='w-16 h-fit'>
              <Image 
                src={pizza} 
                alt='pic' 
                className='px-1 object-contain mb-2 pb-2 border-b-2 duration-700 hover:border-orange-600 cursor-pointer'
                style={size === 'l' ? {borderColor: 'rgb(234 ,88 ,12)'} : {}}
                onClick={()=>selectSize('l')}
              />
              <p className='text-center rounded-full bg-green-800 text-white text-xs select-none'>Large</p>
            </div>
          </div>

          <p className='text-lg font-bold'>Choose additional ingredients</p>

          <span className='gap-4 flex flex-row'>
            <span className='gap-1 flex flex-row'>
              <input 
                type='checkbox' 
                name='spicy' 
                className='text-sm text-gray-500' 
                onChange={()=> selectSauce('spicy')} 
                checked={sauce === 'spicy'}
              />
              <label className='text-sm text-gray-500'>spicy sauce</label>
            </span>
            <span className='gap-1 flex flex-row'>
              <input 
                type='checkbox' 
                name='garlic' 
                className='text-sm text-gray-500' 
                onChange={()=> selectSauce('garlic')} 
                checked={sauce === 'garlic'}
              />
              <label className='text-sm text-gray-500'>Garlic sauce</label>
            </span>
          </span>

          <div className='flex flex-row'>
            <p className='pl-2 pr-2 p-1 w-fit h-fit bg-gray-200 rounded-l-lg ring-1 ring-gray-400 hover:bg-gray-100 duration-700 cursor-pointer select-none' onClick={handlerDecBtn}>{'<'}</p>
            <p className='pl-2 pr-2 p-1 pt-[.40rem] w-fit ring-1 ring-gray-400 bg-gray-100 cursor-auto text-sm text-center select-none'>{count}</p>
            <p className='pl-2 pr-2 p-1 w-fit h-fit bg-gray-200 rounded-r-lg ring-1 ring-gray-400 hover:bg-gray-100 duration-700 cursor-pointer select-none' onClick={handlerIncBtn}>{'>'}</p>
          </div>

          <div className=''>
            <p className='font-bold text-sm duration-1000 trans'>Total Price : {finalPrice * count}$</p>
            <p className='font-bold text-sm'></p>
          </div>
          <button 
            // href={{
            //   pathname:'/cart',
            //   query:{id: 7}
            // }}
            onClick={handlerAddToCard}
            className='w-fit p-2 text-xs font-bold border-2 border-[orange] orange text-white hover:bg-white hover:text-orange-600 duration-500' 
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  )
}


