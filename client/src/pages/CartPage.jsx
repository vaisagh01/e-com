import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, Increment, Decrement } from '@/redux/cart';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ChevronLeft, Trash, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const cart = useSelector(state => state.cart)
    const [count, setCount] = useState(0);
    const nav = useNavigate();
    const dispatch = useDispatch()

    const handleDelete = (item) => {
        dispatch(deleteProduct(item))
    }
  return (
    <div className='pt-20 lg:px-32 md:px-10 sm:px-5 px-5'>
    <div className='p-1 flex justify-between items-center'>
        <Button onClick={()=>{nav(-1)}} variant="ghost" className="w-18 flex sticky justify-center items-center text-neutral-600 gap-2 pl-1"><ChevronLeft />Back</Button>
        <div className='flex gap-2 '>
            <h1 className='font-bold text-neutral-700'>Summary:</h1>
            <p className='text-neutral-600'>No of items: <span className='text-blue-500 font-semibold'>{cart.quantity}</span></p>
            <p>Total: <span className='text-amber-500 font-semibold'>{cart?.total?.toFixed(2)}</span></p>
        </div>
    </div>
      <div className='flex flex-col max-h-[80vh] gap-2'>
        <div className='w-full px-5 py-6 overflow-y-scroll min-h-96 hide-scroll divide-y-[1px] divide-slate-200 md:px-10 flex flex-col gap-2'>
            { cart.products?.length !==0  ?
                cart.products?.map((item,index) => {
                    return (
                            <div key={index} className='flex items-center  p-2 max-h-36 h-34 max-w-[70%]'>
                                <img className='max-h-32' src="/default.jpg" alt="" />
                                <div className='w-full h-32 flex flex-col sm:flex-col md:flex-row lg:flex-row items-start p-3 justify-between'>
                                    <div className='flex gap-2 h-full items-center justify-between'>
                                        <h1 className='text-xl'>{item.type}</h1>
                                        {/* <p>{item.color}</p> */}
                                        {/* <p>{item.size}</p> */}
                                    </div>
                                    <div className='flex gap-3 h-full items-center'>
                                        <div className='flex h-9 w-24 rounded-md text-neutral-600 text-xl items-center border-[1px] border-neutral-300 justify-between'>
                                            <button onClick={()=>
                                                {
                                                    count!==0 ? setCount(count-1) : null; 
                                                    if(item.quantity === 0){
                                                        handleDelete(item);
                                                    } else{
                                                        dispatch(Decrement({...item,quantity:count, price:item.price}))
                                                    }
                                                }} className='h-full border-r-[1px] border-neutral-300 hover:bg-neutral-100 text-center w-1/3 flex items-center justify-center'><Minus/></button>
                                            <p className='w-1/3 text-[16px] text-center'>{item?.quantity}</p>
                                            <button onClick={()=>{setCount(count+1); dispatch(Increment({...item,quantity:count, price:item.price}))}} className='h-full w-1/3 border-l-[1px] border-slate-300 hover:bg-neutral-100 flex items-center justify-center'><Plus/></button>   
                                        </div>
                                        <Button variant="ghost" onClick={()=>{handleDelete(item)}} className=" w-10 rounded-full p-0 hover:bg-red-100"><X/></Button>
                                    </div>
                                </div>
                            </div>
                    )
                })
                : <div className='h-32 flex p-10 text-neutral-600 font-medium text-2xl'>
                    Cart is empty !!
                </div>
            }
        </div>
      </div>
    </div>
  )
}
