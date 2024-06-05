import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Aside from '@/components/Aside';  

export default function CategoryPage() {
    let [filteredData, setFilteredData] = useState();
    const nav = useNavigate();
    const temp = useParams();
    const category = temp.category
    useEffect(()=>{
        const fetchData = async () => {
            const res =await fetch('/api/product/')
            const data = await res.json();
            // console.log(res);
            setFilteredData(data)
        }
        fetchData();
    },[])
    filteredData = filteredData?.filter((item) => item.categories && item.categories.includes(`${category}`))

    return (
        <div className=' flex py-20'>
            <Aside />
            <div className='lg:ml-52 border-l-[1px] border-neutral-300 md:ml-52 px-10 ml-5'>
                <h1 className='text-2xl font-medium text-neutral-700 '>
                    Search through {category} Products
                </h1>
                <div className='flex items-center  justify-between py-4 gap-5'>
                    <div className='flex items-center gap-4'>
                        <h1>Sort by</h1>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Features" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem onClick={()=>setDirection('desc')}  value="light"><button>Price: High to Low</button></SelectItem>
                                <SelectItem onClick={()=>setDirection('asc')}  value="dark"><button>Price: Low to High</button></SelectItem>
                                <SelectItem value="system">Popularity</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:gap-9 sm:gap-5 lg:gap-16'>
                    {
                        filteredData?.map((item,index) => {
                            return (
                                <Card onClick={()=>{nav(`/product/${item.type}`)}} key={index} className="max-w-72 min-w-64 cursor-pointer hover:scale-[1.01] transition-all">
                                    <img className=' border-[1px] border-slate-300 rounded-md' src={'/default.jpg'} alt="" />
                                    <CardHeader>
                                        <CardTitle className="text-blue-500 font-sm">{item?.type}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="m">
                                        <CardDescription className="py-2">
                                            <p>{item?.color}</p>
                                            <p>{item?.desc}</p>
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <p className=''>${item?.price}</p>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}
