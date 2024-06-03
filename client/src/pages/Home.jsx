import React from 'react'
import data from '../data.js'
import Categories from '@/components/Categories.jsx'
import Banner from '@/components/Banner.jsx'
import { Button } from '@/components/ui/button'
import { logOut } from '@/redux/slice'
import { useDispatch, useSelector } from 'react-redux'
import CategorySlider from '@/components/CategorySlider.jsx'

export default function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.logger.currentUser)
  const handleLogout = () => {
    dispatch(logOut());
  }
  const filtered = () => {
    const filteredData = data.filter((item) => item.categories && item.categories.includes("Kitchen"))
    // console.log(filteredData);
  }
  filtered();
  
  return (
    <div className='px-10 lg:px-20 md:px-20 py-16'>
      <Categories />
      <Banner />
      <CategorySlider category={"Homeware"} />
      <CategorySlider category={"Accessories"} />
      <CategorySlider category={"Kitchenware"} />
      <CategorySlider category={"Electronics"} />
      <CategorySlider category={"Clothing"} />
    </div>
  )
}
