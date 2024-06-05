import React, { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"

export default function Aside() {
    const [sliderValue, setSliderValue] = useState(66);
    const handleSlider = (e) => {
        setSliderValue([e.target.value])
    }
  return (
    <aside className=' p-5 h-3/4 mx-5 hidden md:flex lg:flex fixed min-w-44'>
        <div className='flex border-b-[1px] border-neutral-300 w-full h-32 gap-3 p-2 flex-col'>
            <h1 className='text-semibold'>Price</h1>
            <p>price:{sliderValue}</p>
            <Slider onChange={handleSlider} defaultValue={[sliderValue]}  max={100} step={1} />

        </div>
    </aside>
  )
}
