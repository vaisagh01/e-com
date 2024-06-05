import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const nav = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    useEffect(()=>{
        const fetchProducts = async () => {
            const res = await fetch(`api/product/${input.charAt(0).toUpperCase() + input.slice(1)}`)
            const data = await res.json()
            setSearchResults([data])
            console.log([data]);
        }
        if(input){
            fetchProducts();
        }
    },[input]);
    return (
        <div className=' relative w-36 sm:w-36 md:w-80 lg:w-96'>
            <Input onChange = {handleChange} placeholder="Search for Products" className=""/> 
            {
                input
                ? <div className='absolute shadow-lg p-1 rounded-lg bg-white w-full'>
                    {
                        searchResults?.map((item, index) => {
                            return <div onClick={()=>{nav(`/product/${item?.type}`);setInput(" ");setSearchResults([])}} className='cursor-pointer flex items-center gap-2  py-2 px-1 hover:bg-slate-100'  key={index}>
                                <img src={'/default.jpg'} className='h-10 ' alt="" />
                                <p>{item?.type}</p>
                            </div>
                        })
                    }
                </div>
                :null
            }
        </div>
    )
}
