import React from 'react'

export default function Footer() {
  return (
    <div className=' overflow-hidden border-t-[1px]  flex gap-3 p-3 items-center justify-evenly bg-white '>
      <div className='p-10  flex flex-col justify-center'>
        <h1 className='mb-5 font-semibold text-lg'>CUSTOMER SERVICE</h1>
        <ul className='flex flex-col gap-1 text-neutral-500 '>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Sell With Us</a></li>
            <li><a href="">Shipping</a></li>
        </ul>
      </div>
      <div className='p-10  flex flex-col justify-center'>
        <h1 className='mb-5 font-semibold text-lg'>LINKS</h1>
        <ul className='flex flex-col gap-1 text-neutral-500 '>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Sell With Us</a></li>
            <li><a href="">Shipping</a></li>
        </ul>
      </div>
      <div className='p-10  flex flex-col justify-center'>
        
      </div>
    </div>
  )
}
