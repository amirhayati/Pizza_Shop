"use client";

import React, { Suspense, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import pizza from '@/assets/pic/pizza2.png'
import {list} from '@/assets/data/list'
import { useParams } from 'next/navigation';
import { Message } from '@/components/message';

import { useDispatch } from 'react-redux'
import { incCount, decCount, addToCart } from '@/redux/features/progressSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'

type ProductSize = "s" | "m" | "l" ;
type ProductSauce = "spicy"|"garlic"|"noSauce" ;
type CartItemType = {
  id?: number;
  pid?: string;
  name?: string;
  desc?: string;
  img?: StaticImageData;
  count?: number;
  price?: number;
  size?: ProductSize;
  sauce?: ProductSauce;
};

// export const getStaticPaths = async () => {
//   const paths = list.map(item =>{
//     return{
//       params: {id: item.id}
//     }
//   })
  
//   return {
//     paths: [{id:1}],
//     // paths,
//     fallback:true
//   }
// }


export default function AboutProduct() {
  
  const dispatch = useDispatch<AppDispatch>()
  const count = useAppSelector(state => state.progressSlice.count)

  const params:any = useParams();
  const newList = list[params.id-1]
  
  const [size,setSize] = useState<ProductSize>('s')
  const [price,setPrice] = useState<number>()
  const [sauce,setSauce] = useState<ProductSauce>('noSauce')
  const [showMessage,setShowMessage] = useState<Boolean>(false)

  useEffect(()=>{
      if(newList)  setPrice(Number(newList.s_price))
  },[])

  // const pathname = usePathname()
  // --- pathname is /id so use subString to access second params ---
  // const productId = Number(pathname.substring(1,2))

  const handlerAddToCard = () => {
    const newCartItem : CartItemType = {};

    newCartItem.id = newList.id;
    newCartItem.pid = newList.id + size + sauce;
    newCartItem.name = newList.name;
    newCartItem.desc = newList.desc;
    newCartItem.img = newList.img?newList.img:pizza;
    newCartItem.count = count;
    newCartItem.price = price;
    newCartItem.size = size;
    newCartItem.sauce = sauce;
    dispatch(addToCart({ArrItem: newCartItem, count: count}))

    setShowMessage(true)
  }

  const handlerIncBtn = () => {
    dispatch(incCount());
  }

  const handlerDecBtn = () => {
    count > 1 && dispatch(decCount());
  }
  
  function selectSize(params:ProductSize) {
    setSize(params)

    switch (params) {
      case 's':
        setPrice(Number(newList.s_price))
        break;
      case 'm':
        setPrice(Number(newList.m_price))
        break;
      case 'l':
        setPrice(Number(newList.l_price))
        break;
    
      default:
        break;
    }
  }
  
  function selectSauce(params:ProductSauce) {
    sauce === params ? setSauce('noSauce') : setSauce(params)
  }

  function handlerMessageVisibility() {
    setShowMessage(false)
  }

  useEffect(() => {
    showMessage &&
      setTimeout(() => {
        handlerMessageVisibility()
      }, 2000);
  }, [showMessage])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full min-h-[80vh] md:gap-8 p-8'>
      {
        showMessage && <Message func={handlerMessageVisibility} productName={newList.name}/>
      }
      <div className='flex-1 h-fit p-2 sm:p-16 flex center'>
        <Image src={newList.img} alt='pic' className='md:w-full w-1/2'/>
      </div>

      <div className='flex-1 h-fit flex gap-4 flex-col p-8 md:p-0'>
        <p className='text-2xl font-bold text-orange drop-shadow-md'>{newList.name}</p>

        <p className='text-lg text-orange underline'>{price}$</p>
        
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
          <p className='font-bold text-sm duration-1000 trans'>Total Price : {Number(price) * count}$</p>
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
  )
}

