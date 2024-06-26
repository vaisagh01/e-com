import React from 'react'
import { Input } from './ui/input'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '@/redux/slice'
import { CircleUserRound, ShoppingCart, Menu, LogOut, UserRound, ShoppingBag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';

export default function Header() {
  const username = useSelector(state => state.logger.currentUser);
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className='w-screen fixed z-50 text-slate-500 flex gap-2 justify-around items-center h-14 bg-white border-[1px] border-slate-200'>
      <NavLink to={'/'}  className='text-3xl flex gap-2 items-center  font-serif'>
        <ShoppingBag />
        <p className='hidden sm:hidden md:flex lg:flex'>e-com</p> 
      </NavLink>
      <SearchBar />
      
      <ul className='flex items-center gap-5'>
        <DropdownMenu>
          <DropdownMenuTrigger className='hover:text-neutral-600 transition-all flex gap-2'><CircleUserRound /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>{nav('/profile')}} className="gap-2"><UserRound />View Profile</DropdownMenuItem>
            <DropdownMenuItem>View Orders</DropdownMenuItem>
            <Dialog>
              <DialogTrigger className=" text-sm px-2 pt-2 pb-3 flex items-center gap-2"><LogOut/>Log out</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure you want to log out?</DialogTitle>
                  <DialogDescription>
                    <div className='flex gap-2 m-5'>
                      <Button onClick={()=>{dispatch(logOut())}} className="w-20">Yes</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>

        <li><NavLink to={'/cart'} className={'flex relative'}><ShoppingCart/> <p className=' absolute w-4 flex items-center justify-center h-4 bg-neutral-400 text-slate-100 p-[2px] rounded-full -top-2 -right-2 text-xs'>{quantity}</p></NavLink></li>
      </ul>
    </div>
  )
}
