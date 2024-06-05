import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
  

export default function Categories() {
  const nav = useNavigate();
  return (
    <div className='flex bg-white rounded-md px-3 divide-x-[1px] divide-slate-200 text-neutral-500 overflow-x-scroll hide-scroll items-center my-3 '>
      <p className='text-neutral-500 font-medium min-w-36 text-medium'>Shop by Category </p>
        <Button onClick={()=>{nav(`/category/Electronics`)}} className="hover:bg-neutral-100 rounded-none" variant="ghost">Electronics</Button>
        <Button onClick={()=>{nav(`/category/Accessories`)}}  className="hover:bg-neutral-100 rounded-none" variant="ghost">Accessories</Button>
        <Button onClick={()=>{nav(`/category/Homeware`)}}  className="hover:bg-neutral-100 rounded-none" variant="ghost">Homeware</Button>
        <Button onClick={()=>{nav(`/category/Kitchenware`)}}  className="hover:bg-neutral-100 rounded-none" variant="ghost">Kitchenware</Button>
        <Button onClick={()=>{nav(`/category/Clothing`)}}  className="hover:bg-neutral-100 rounded-none" variant="ghost">Clothing</Button>
        <Button onClick={()=>{nav(`/category/Entertainment`)}}  className="hover:bg-neutral-100 rounded-none" variant="ghost">Entertainment</Button>
    </div>
  )
}
