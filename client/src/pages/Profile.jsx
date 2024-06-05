import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/redux/slice'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LogOut, Pencil } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'


export default function Profile() {
  const [user, setUser] = useState({})
  const currentUser = useSelector((state) => state.logger.currentUser)
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  }

  const handleChange = (e) => {
      setUpdateForm({...updateForm, [e.target.id]:e.target.value})
  }
  const signup = async () => {
    try{
      const res = await fetch(`/api/user/update/${currentUser.id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(updateForm)
      })
      const data = await res.json();
      console.log(data);
      if(data === "User updated"){
        toast(data + " - Refresh to see change")
      }

    } catch (e) {
      console.log(e);
    }
  }

  console.log(currentUser.id);
  const fetchUserInfo = async () => {
    const res = await fetch(`/api/user/find/${currentUser.id}`)
    const data = await res.json();
    setUser(data)
    console.log(user);
  }
  useEffect(()=>{
    fetchUserInfo();
  },[updateForm, setUpdateForm])
  return (
    <div className='pt-20 h-screen flex justify-center overflow-hidden items-center bg-neutral-100 '>
      <Card className="sm:w-3/4 md:w-3/4 w-[90%] lg:w-1/2 py-20">
        <CardHeader className="flex justify-around items-center gap-9">
          <Avatar className="size-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>{user.username}</CardTitle>
          
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <div>

        </div>
        <CardContent className="flex flex-col gap-4">
          <div className='flex px-4 py-3 gap-5 bg-neutral-100 border-[2px] border-neutral-300 rounded-lg'>
            <label className="text-slate-400">Username   </label>
            <p>{user.username}</p>
          </div>
          <div className='flex px-4 py-3 gap-5 bg-neutral-100 border-[2px] border-neutral-300 rounded-lg'>
            <label className="text-slate-400">Email   </label>
            <p>{user.email}</p>
          </div>

        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={()=>{dispatch(logOut())}} className="gap-3 bg-red-500">Log out<LogOut /></Button>
          <Dialog>
              <DialogTrigger className='bg-neutral-300 px-4 py-2 flex text-slate-600 gap-5 rounded-lg'> <Pencil /> Edit</DialogTrigger>
              <DialogContent>
                <DialogHeader className={'flex gap-5'}>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    <form onSubmit={handleSubmit} className=' flex flex-col'>
                      <label className='text-[14px] mt-5 mb-1 text-slate-500'>Username</label>
                      <Input  onChange={handleChange} id='username'  placeholder="Username" />

                      <label className='text-[14px] mt-5 mb-1 text-slate-500 '>E-mail</label>
                      <Input  onChange={handleChange} id='email' type="email"  placeholder="eg.example@gmail.com" />

                      {/* <p className='italic text-xs '>password must be atleast 6 characters</p> */}
                      <Button id="button" className="mt-5">Update Details</Button>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}
