import React, { FunctionComponent } from 'react'

type messageType = {
    func: React.MouseEventHandler<HTMLButtonElement>,
    productName: string
}
export const Message = ({func, productName}: messageType) => {
  return (
    <div className='fixed w-screen md:w-fit h-fit z-40 -m-8 mt-0 md:right-12'>
        <div className="flex items-center space-x-4 p-4 text-green-100 rounded-lg bg-green-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
                {productName} add to cart
            </div>
            <button onClick={func} type="button" className="ms-auto -mx-1.5 -my-1.5 text-green-100 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-700 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-3" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    </div>
  )
}
