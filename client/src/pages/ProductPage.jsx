import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { ShoppingBag, ZapIcon, Minus, Plus, Check, ChevronLeft, Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/redux/cart';
import { toast } from "sonner"

export default function ProductPage() {
    const title = useParams();
    const [count, setCount] = useState(1);
    const [item, setItem] = useState([])
    const product = title.product;
    const nav = useNavigate();
    const cart = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProduct = async () => {
            const res = await fetch(`/api/product/${product}`);
            const data = await res.json();
            setItem(data);
        }
        fetchProduct();
    },[])

    const isThere = cart.find(i => i.type === product) ? true : false
    const handleAddCart = (type) => {
      toast(`${product} added to cart `)
      dispatch(addProduct({...item, quantity:count, price:item.price}))
    }
  return (
    <div className='pt-14 flex flex-col'>
      <Button onClick={()=>{nav(-1)}} variant="ghost" className="max-w-18 text-neutral-600 gap-2 absolute"><ChevronLeft />Back</Button>
      <div className='flex flex-col lg:flex-row md:flex-row gap-5 h-[600px] px-10 lg:px-36 py-10 items-center justify-start'>
        <div className='sm:w-3/4 w-3/4 lg:w-auto'>
            <img className='lg:h-3/4 md:h-1/2 h-48 rounded-lg' src="/default.jpg" alt="" />
        </div>
        <div className=' overflow-y-scroll hide-scroll lg:border-l-[1px] border-slate-300 flex flex-col lg:p-10'>
            <div>
                <h1 className='text-5xl mb-2  font-medium'>{item?.type}</h1>
                <p className='mb-2 '><span className=''>Color-</span> {item?.color}</p>
                <p className='mb-2 '>{item?.desc}</p>
                <p className='mb-2 text-2xl'>${item?.price}</p>
                <div className='mb-2 '>
                <div>
                  <div className='flex w-32 h-10 rounded-md text-neutral-600 text-xl items-center border-[1px] border-neutral-300 justify-between'>
                    <button onClick={()=>{count!==0 ? setCount(count-1) : null}} className='h-full border-r-[1px] border-neutral-300 hover:bg-neutral-100 text-center w-1/3 flex items-center justify-center'><Minus/></button>
                    <p className='w-1/3  text-center'>{count}</p>
                    <button onClick={()=>{setCount(count+1)}} className='h-full w-1/3 border-l-[1px] border-slate-300 hover:bg-neutral-100 flex items-center justify-center'><Plus/></button>
                  </div>
                </div>
                </div>
                <div className='w-32 mb-2 md:flex-row sm:flex-row lg:flex-row flex-col flex  gap-3'>
                  {
                    isThere 
                    ? <Button className="bg-green-400 hover:bg-green-400 flex gap-2">Added to Cart <Check /></Button>
                    : <Button onClick={()=>{handleAddCart(item?.type)}} className="bg-blue-400 hover:bg-blue-500 flex gap-2">Add to Cart <ShoppingBag /></Button>
                  }
                    <Button className="bg-amber-400 hover:bg-amber-500 flex gap-2">Buy Now <ZapIcon /></Button>
                </div>
                <div className='my-5'>
                  <h1 className='text-lg font-medium text-neutral-500'>Rating</h1>
                  <ul className='flex my-2'>
                    <li><Star className='text-amber-500 fill-amber-500'/></li>
                    <li><Star className='text-amber-500 fill-amber-500'/></li>
                    <li><Star className='text-amber-500 fill-amber-500'/></li>
                    <li><Star className='text-neutral-300 fill-neutral-300'/></li>
                    <li><Star className='text-neutral-300 fill-neutral-300'/></li>
                  </ul>
                </div>
            </div>
        </div>
      </div>

      
    </div>
  )
}
