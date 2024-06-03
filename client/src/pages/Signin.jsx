import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, setCurrentUser } from '../redux/slice'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from "sonner"



export default function Signin() {
    const [form, setForm] = useState({});
    const {isLoggedIn, currentUser} = useSelector((state) => state.logger)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.length === 0){
          console.log("t");
        }
        signin();
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.id]:e.target.value})
    }

    const signin = async () => {
      try{
        const res = await fetch('/api/auth/signin',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(form)
        })
        // console.log(res.data);
        const data = await res.json();
        console.log(data);
        if(data.message === "Logged in successfully"){
          dispatch(logIn())
          toast(data.message)
          dispatch(setCurrentUser({id:data.id, ...form}))
        }
        
        // toast(data)

      } catch (e) {
        console.log(e);
      }
    }
    return (
    <div className='w-screen h-screen'>
      <section className=' h-screen p-auto items-center justify-center flex'>
        <Card className="w-[60%] shadow-md flex flex-col justify-between min-w-96 space-y-5 px-9 py-9">
            <CardHeader>
                <CardTitle className="text-4xl text-center text-neutral-600">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className=' flex flex-col justify-center'>
                    <label className='text-[14px] mt-5 mb-1 text-slate-500'>E-mail</label>
                    <Input required onChange={handleChange} id='email' type="email" placeholder="Please enter your E-mal" />

                    <label className='text-[14px] mt-5 mb-1 text-slate-500'>Password</label>
                    <Input required onChange={handleChange} id='password' type="password"  placeholder="Please enter your Password" />
                    <Button id="submit" className="mt-5">Login</Button>
                </form>
            </CardContent>
            <CardFooter>
                <p>Dont have an account? <NavLink className={'text-red-600'} to={'/signup'}>Register</NavLink> </p>
            </CardFooter>
        </Card>
      </section>
    </div>
  )
}
