import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavLink, Navigate } from 'react-router-dom'
import { toast } from "sonner"


export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [enable, setEnable] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        signup();
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.id]:e.target.value})
    }
    const signup = async () => {
      try{
        const res = await fetch('/api/auth/signup',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(form)
        })
        const data = await res.json();
        if(data === "User Created Successfully"){
          setTimeout(() => {
            navigate('/signin')
          }, 2000);
        }
        toast(data)

      } catch (e) {
        console.log(e);
      }
    }

    return (
    <div className='w-screen h-screen bg-neutral-950'>
      <section className=' h-screen p-auto items-center justify-center flex'>
        <Card className="w-1/2 min-w-96 space-y-5 px-5 py-9">
            <CardHeader>
                <CardTitle className="text-4xl font-bold drop-shadow-2xl text-center text-neutral-600">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className=' flex flex-col'>
                    <label className='text-[14px] mt-5 mb-1 text-slate-500'>Username</label>
                    <Input required onChange={handleChange} id='username'  placeholder="Username" />

                    <label className='text-[14px] mt-5 mb-1 text-slate-500 '>E-mail</label>
                    <Input required onChange={handleChange} id='email' type="email"  placeholder="eg.example@gmail.com" />

                    <label className='text-[14px] mt-5 mb-1 text-slate-500 '>Password</label>
                    <Input required onChange={handleChange} id='password' type="password"  placeholder="atleast 6 characters" />

                    {/* <p className='italic text-xs '>password must be atleast 6 characters</p> */}
                    <Button id="button" className="mt-5">Register</Button>
                </form>
            </CardContent>
            <CardFooter>
                <p>Already a user? <NavLink className={'underline text-blue-400'} to={'/signin'}>login</NavLink> </p>
            </CardFooter>
        </Card>
      </section>
    </div>
  )
}
