import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChevronRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function CategorySlider({category}) {
    let [filteredData, setFilteredData] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
        const fetchProducts = async () => {

            const res = await fetch('api/product/')
            const data = await res.json()
            setFilteredData(data)
        }
        fetchProducts();
    },[])
    filteredData = filteredData.filter((item) => item.categories && item.categories.includes(`${category}`))

    return (
        <div className='mt-9'>
            <h1 onClick={()=>{nav(`/category/${category}`)}} className='text-2xl cursor-pointer text-slate-700 font-medium pt-8 flex items-center hover:gap-5 transition-all duration-300 gap-1 '>Shop for {category} <ChevronRight className='mt-1' /></h1>
            <div className='flex py-3 overflow-x-auto gap-3 h-auto hide-scroll'>
                { filteredData &&
                    filteredData.map((item,index) => {
                        return (
                            <Card onClick={()=>{nav(`/product/${item.type}`)}} key={index} className="min-w-64 max-w-64 cursor-pointer hover:scale-[1.01] transition-all duration-200">
                                <CardContent className="mt-7">
                                    <img className='size-full border-[1px] border-slate-300 rounded-md' src={'/default.jpg'} alt="" />
                                    <CardDescription className="pt-2 text-blue-500 font-medium text-xl">{item.type}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <p className='text-xl text-amber-600'>${item.price}</p>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
                
            </div>
        </div>
    )
}
