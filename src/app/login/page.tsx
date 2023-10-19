'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import { AiFillEye, AiFillEyeInvisible, AiOutlineEyeInvisible} from 'react-icons/ai'

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [loginAccount, setLoginAccount] = useState(true);
  const [emailAdd, setEmailAdd] = useState('');

  const gradientProps = 'from-red-500 to-orange-500';

  const handlerPassState =()=>{
    setShowPass(!showPass)
  }

  const handlerLoginAccountState = (data:Boolean)=>{
    setLoginAccount(data)
  }

  function LoginComponnet() {
    return(
      <form>
        <div className="my-6">
          <label htmlFor='Email' className="block mb-2 text-sm font-medium text-gray-90">Email Address</label>
          <input type="text" id="Email" placeholder='email@yahoo.com' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "/>
        </div>

        <div className="my-6">
          <label htmlFor='PassWord' className="block mb-2 text-sm font-medium text-gray-90">PassWord</label>
          <div className='relative flex items-center'>
            <input type={showPass?'text':'password'} id="PassWord" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "/>
            <a className='absolute right-0 p-3' onClick={handlerPassState}>
              {
                showPass?
                  <AiFillEye className="text-xl"/>
                :
                  <AiFillEyeInvisible className="text-xl"/>
              }
            </a>
          </div>
        </div>

        <div className='mt-12 mb-6 text-center flex'>
          <Link href='/admin' className={'w-full py-2 border-2 rounded-md text-white shadow-lg hover:bg-gradient-to-t transition duration-500 bg-gradient-to-l ' + gradientProps}>
            Login
          </Link>
        </div>

      </form>
    )
  }

  function SignUpComponnet() {
    return(
      <form>
        <div className="my-6">
          <label htmlFor='Email' className="block mb-2 text-sm font-medium text-gray-90">Email Address</label>
          <input type="text" id="Email" placeholder='email@yahoo.com' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "/>
        </div>

        <div className="my-6">
          <label htmlFor='PassWord' className="block mb-2 text-sm font-medium text-gray-90">PassWord</label>
          <div className='relative flex items-center'>
            <input type={showPass?'text':'password'} id="PassWord" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "/>
            <a className='absolute right-0 p-3' onClick={handlerPassState}>
              {
                showPass?
                  <AiFillEye className="text-xl"/>
                :
                  <AiFillEyeInvisible className="text-xl"/>
              }
            </a>
          </div>
        </div>
        
        <div className="my-6">
          <label htmlFor='EmailCode' className="block mb-2 text-sm font-medium text-gray-90">Your Email Verification Code</label>
          <input type="text" id="EmailCode" placeholder='email@yahoo.com' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "/>
        </div>

        <div className='mt-12 mb-6 text-center flex'>
          <a onClick={()=>handlerLoginAccountState(true)} className={'w-full py-2 border-2 rounded-md text-white shadow-lg hover:bg-gradient-to-t transition duration-500 bg-gradient-to-l ' + gradientProps}>
            SignUp
          </a>
        </div>

      </form>
    )
  }

  return (
    <div className={'w-full h-full p-4 flex center bg-gradient-to-bl ' + gradientProps}>
      <div className='px-6 w-full sm:w-[25rem] min-h-[10rem] bg-white rounded-md shadow-xl'>

        <p className='font-bold text-3xl my-8 text-center'>Login Form</p>

        <div className='w-full h-fit flex flex-row center rounded-lg border border-orange-600 '>
          <div className={`w-1/2 py-2 text-center rounded-tl-lg rounded-bl-lg duration-300 text-orange-600 opacity-50 hover:opacity-100 ${loginAccount && gradientProps} ${loginAccount && 'text-white bg-gradient-to-r opacity-100'}`} onClick={()=>handlerLoginAccountState(true)}>
            <p className='font-bold'>Login</p>
          </div>
          <div className={`w-1/2 py-2 text-center rounded-tr-lg rounded-br-lg duration-300 text-orange-600 opacity-50 hover:opacity-100 ${!loginAccount && gradientProps} ${!loginAccount && 'text-white bg-gradient-to-r opacity-100'}`} onClick={()=>handlerLoginAccountState(false)}>
            <p className='font-bold'>SignUp</p>
          </div>
        </div>

        {
          loginAccount?
            <LoginComponnet />
          :
            <SignUpComponnet />
        }
      </div>
    </div>
  )
}
