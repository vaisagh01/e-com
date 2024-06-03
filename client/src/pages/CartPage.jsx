import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, Increment, Decrement } from '@/redux/cart';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ChevronLeft, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const cart = useSelector(state => state.cart)
    const [list, setList] = useState([]);
    const userId = useSelector(state => state.logger.currentUser.id)
    console.log(userId);
    const [count, setCount] = useState(0);
    const nav = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/api/cart/',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({userId:userId})
            });
            const data = await res.json();
            setList(data.products)

            console.log(data);
        }
        fetchData();
    },[])

    const handleDelete = (item) => {
        // console.log(cart.products[index]);
        dispatch(deleteProduct(item))
        // console.log(cart);
    }

  return (
    <div className='pt-20 lg:px-32 md:px-10 sm:px-5 px-5'>
    <Button onClick={()=>{nav(-1)}} variant="ghost" className="w-18 flex justify-center items-center text-neutral-600 gap-2 pl-1"><ChevronLeft />Back</Button>
      <div className='flex max-h-[80vh] gap-2'>
        <div className='w-full px-1 md:px-10  overflow-y-scroll hide-scroll flex flex-col gap-2'>
            { cart.products?.length !==0  ?
                cart.products?.map((item,index) => {
                    return (
                        <div key={index} className=' p-2 overflow-hidden flex flex-row lg:flex-row md:flex-row border-[1px] rounded-lg border-neutral-300 sm:justify-start justify-start items-center gap-2'>
                            <img className='w-36' src="/default.jpg" alt="" />
                            <div className='flex-col items-center sm:items-baseline sm:flex-row lg:flex-row md:flex-row w-full justify-between flex'>
                                <div className='py-4 min-w-28 max-w-28 px-0'>
                                    <h1 className='text-xl'>{item.type}</h1>
                                    <p>{item.color}</p>
                                    <p>{item.size}</p>
                                </div>
                                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row gap-5'>
                                    <div className='flex h-10 min-w-28 max-w-28 rounded-md text-neutral-600 text-xl items-center border-[1px] border-neutral-300 justify-between'>
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
                                    <Button onClick={()=>{handleDelete(item)}} className="bg-red-400 hover:bg-red-500"><Trash/></Button>
                                </div>
                            </div>
                        </div>
                    )
                })
                : <div className=''>
                    Cart is empty !!
                </div>
            }
        </div>
        {/* <div className='w-1/4 p-5'>
            summary
        </div> */}
      </div>
    </div>
  )
}
