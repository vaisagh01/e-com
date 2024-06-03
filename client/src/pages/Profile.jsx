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



export default function Profile() {
  const [user, setUser] = useState({})
  const currentUser = useSelector((state) => state.logger.currentUser)
  const dispatch = useDispatch();
  console.log(currentUser.id);
  const fetchUserInfo = async () => {
    const res = await fetch(`/api/user/find/${currentUser.id}`)
    const data = await res.json();
    setUser(data)
    console.log(user);
  }
  useEffect(()=>{
    fetchUserInfo();
  },[])
  return (
    <div className='pt-20 h-screen flex justify-center items-center bg-neutral-100 '>
      <Card className="sm:w-3/4 md:w-3/4 lg:w-1/2 py-20">
        <CardHeader className="flex justify-around items-center gap-9">
          <Avatar className="size-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>User - {user.username}</CardTitle>
          <Dialog>
              <DialogTrigger className='bg-neutral-300 px-4 py-2 flex text-slate-500 gap-5 rounded-lg'> <Pencil /> Edit</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    <label htmlFor="">Username</label>
                    <Input></Input>
                    <label htmlFor="">email</label>
                    <Input></Input>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
        <CardFooter>
          <Button onClick={()=>{dispatch(logOut())}} className="gap-3 bg-red-500">Log out<LogOut /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}
