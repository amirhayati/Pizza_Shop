"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface MyComponentProps {
  getEmailFunc: any;
  getLoginState: any;
}

export default function SignUpBox({getEmailFunc, getLoginState} : MyComponentProps) {

    const [showPass, setShowPass] = useState<boolean>(false);
    const [emailAdd, setEmailAdd] = useState<string>('');

    const gradientProps = 'from-red-500 to-orange-500';

    const handlerPassState =()=>{
        setShowPass(!showPass)
    }

    const handlerLoginAccountState = () => {
      getEmailFunc(emailAdd)
      getLoginState(true)
    }

    return(
      <form>
        <div className="my-6">
          <label htmlFor='Email' className="block mb-2 text-sm font-medium text-gray-90">Email Address</label>
          <input 
            type="text" 
            onChange={e => setEmailAdd(e.target.value)}
            value={emailAdd}
            id="Email" 
            placeholder='email@yahoo.com' 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5 "
          />
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
          <input 
            type="number" 
            id="EmailCode" 
            placeholder='11111' 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-orange-600 w-full p-2.5"
          />
        </div>

        <div className='mt-12 mb-6 text-center flex'>
          <a onClick={handlerLoginAccountState} className={'w-full py-2 border-2 rounded-md text-white shadow-lg hover:bg-gradient-to-t transition duration-500 bg-gradient-to-l ' + gradientProps}>
            SignUp
          </a>
        </div>

      </form>
    )
}