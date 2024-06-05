import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Banner() {
  return (
    <div className='p-1 rounded-lg bg-white'>
      <Carousel>
        <CarouselContent className="sm:w-full gap-1 md:w-full lg:w-1/2">
            <CarouselItem><img src="/offer-banner.jpg" alt="" /></CarouselItem>
            <CarouselItem><img src="/offer-banner.jpg" alt="" /></CarouselItem>
            <CarouselItem><img src="/offer-banner.jpg" alt="" /></CarouselItem>
            <CarouselItem><img src="/offer-banner.jpg" alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}
