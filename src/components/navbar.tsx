'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useCart } from '@/context/CartContext'
import { usePathname } from 'next/navigation'

const navItem = [
  {id:10,name:'HomePage',link:'/'},
  {id:11,name:'Product',link:'/product'},
  {id:12,name:'Menu',link:'/menu'},
  {id:13,name:'Event',link:'#'},
  {id:14,name:'Blog',link:'#'},
  {id:15,name:'Contact',link:'#'},
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const currentPath = usePathname()
  const { cartItems } = useCart();
  
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

  const NavList = () => {
    return(
      navItem.map((item,key)=>(
        <Link key={key} href={item.link} className={`${item.link == currentPath ? 'border-b-white' : 'border-b-transparent'} text-sm border-b-2 hover:border-b-white duration-500 text-white`}>
          {item.name}
        </Link>
      ))
    )
  }

  const NavListPhoneSize = () => {
    return(
      navItem.map((item,key)=>(
        <Link key={key} href={item.link} className={`${item.link == currentPath ? 'border-b-white' : 'border-b-transparent'} text-lg border-b-2 border-b-transparent text-white hover:border-b-white duration-500`}>
          {item.name}
        </Link>
      ))
    )
  }

  
  return (
    <>
      <div className='h-16' />
      <div className='fixed w-full h-16 orange flex items-center justify-between pr-2 pl-2 top-0 gap-6 content-center z-50 shadow-md'>
        <div className='w-1/5'>
          {/* -------if drawer show------- */}
          <div className='flex md:hidden p-4 cursor-pointer center flex-row gap-4' onClick={handleDrawerToggle}>
            <AiOutlineMenu size="2rem" color='white'/>
          </div>
          {/* -------in small size hide this------- */}
          <div className='hidden md:flex center flex-row gap-4'>
            <Link 
              className='text-white text-lg border-b-2 border-b-transparent hover:border-b-white' 
              href={'/login'}
            >
              Login
            </Link> 
            {/* <div><AiOutlinePhone size="2rem" color='white'/></div>
            <div>
              <span className='text-white'>
                <p className='text-sm'>order now</p>
                <p className='text-lg'>0211111</p>
              </span>
            </div> */}
          </div>
        </div>
        <div className='w-3/5 center flex-row gap-4 hidden md:flex'>
          <NavList/>
        </div>
        <Link href={'/cart'} className='w-1/5 center flex'>
          <AiOutlineShoppingCart size='2rem' color='white' />
          <div className='absolute top-[8px] mr-[-23px] pl-[5px] pr-[5px] rounded-full bg-white w-max'>
            <p className='text-orange-500 text-sm'>{cartItems.length}</p>
          </div>
        </Link>
      </div>

      {/* ----- drawer ----- */}
      <div 
        className='flex fixed w-full h-full top-0 z-[100] flex-row overflow-hidden justify-between' 
        style={mobileOpen ? {visibility: 'visible'} : {visibility: 'hidden'}}
      >
        <div 
          className='flex flex-col center gap-8 w-2/3 max-w-xs bg-orange-800 shadow-2xl border-r-2 border-orange-800 duration-700 overflow-y-auto overflow-ellipsis' 
          style={mobileOpen ? {marginLeft:'0'} : {marginLeft:'-40vw'}}
        >
          <div className='flex flex-row fixed top-0 bg-orange-800 overflow-hidden'>
            <div 
              className='p-4 left-0 cursor-pointer duration-300' 
              style={mobileOpen ? {opacity: '1'} : {opacity: '0'}}
              onClick={handleDrawerToggle}
            >
              <AiOutlineClose size='2rem' color='white'/>
            </div>

            <div className='flex items-center'>
              <h2 className='text-lg text-white'>
                LamaLogo
              </h2>
            </div>
          </div>

          <div className='flex flex-col center gap-8'>
            <NavListPhoneSize />
          </div>
        </div>

        <div className='w-2/3 bg-transparent ' onClick={handleDrawerToggle}/>
      </div>
    </>
  )
}
