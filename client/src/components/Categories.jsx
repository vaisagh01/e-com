import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
  

export default function Categories() {
  const nav = useNavigate();
  return (
    <div className='flex gap-3 overflow-x-scroll hide-scroll items-center py-3 '>
        <Button onClick={()=>{nav(`/category/Electronics`)}} variant="outline">Electronics</Button>
        <Button onClick={()=>{nav(`/category/Accessories`)}}  variant="outline">Accessories</Button>
        <Button onClick={()=>{nav(`/category/Homeware`)}}  variant="outline">Homeware</Button>
        <Button onClick={()=>{nav(`/category/Kitchenware`)}}  variant="outline">Kitchenware</Button>
        <Button onClick={()=>{nav(`/category/Clothing`)}}  variant="outline">Clothing</Button>
        <Button onClick={()=>{nav(`/category/Entertainment`)}}  variant="outline">Entertainment</Button>
    </div>
  )
}
