'use client'

import React,{ReactElement, ReactEventHandler, ReactHTML, ReactNode, useState} from 'react'
import LoginBox from '@/components/loginBox'
import SignUpBox from '@/components/signUpBox'

export default function Login() {
  const [loginAccount, setLoginAccount] = useState<boolean>(true);
  const [emailAdd, setEmailAdd] = useState<string>('');

  const gradientProps = 'from-red-500 to-orange-500';

  const handlerLoginAccountState = (data:boolean)=>{
    setLoginAccount(data)
  }

  const handlerGetEmailFromSignUpPage =(email:string)=>{
    setEmailAdd(email)
  }

  return (
    <div className={'w-full h-full p-4 flex center bg-gradient-to-bl overflow-y-auto ' + gradientProps}>
      <div className='p-6 w-full sm:w-[25rem] min-h-[10rem] bg-white rounded-md shadow-xl h-fit'>

        <p className='font-bold text-3xl my-8 text-center'>Login Form</p>

        <div className='w-full h-fit flex flex-row center rounded-lg border border-orange-600 '>
          <div 
            className={`w-1/2 py-2 text-center rounded-tl-lg rounded-bl-lg duration-300 text-orange-600 hover:opacity-100 ${loginAccount && gradientProps} ${loginAccount && 'text-white bg-gradient-to-r opacity-100'} ${!loginAccount && 'opacity-50'}`} 
            onClick={()=>handlerLoginAccountState(true)}
          >
            <p className='font-bold'>Login</p>
          </div>
          <div 
            className={`w-1/2 py-2 text-center rounded-tr-lg rounded-br-lg duration-300 text-orange-600 hover:opacity-100 ${!loginAccount && gradientProps} ${!loginAccount && 'text-white bg-gradient-to-r opacity-100'} ${loginAccount && 'opacity-50'}`} 
            onClick={()=>handlerLoginAccountState(false)}
          >
            <p className='font-bold'>SignUp</p>
          </div>
        </div>
        
        {
          loginAccount?
            <LoginBox emailVal={emailAdd}/>
          :
            <SignUpBox getEmailFunc={handlerGetEmailFromSignUpPage} getLoginState={handlerLoginAccountState}/>
        }
      </div>
    </div>
  )
}
