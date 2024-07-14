import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/forPartner'
 
const brands = [
    {
        imageUrl:
        "/oops_modern.png",
      name: "Yuvraj Bansal",
      title: "Founder at Yuka",
    },
    
    {
        imageUrl: "/inkpiration.png",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    {
        imageUrl: "/drakt.png",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    {
        imageUrl: "/boute_belle.png",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    {
      imageUrl: "/twinkle.png",
    name: "Ankit Singh",
    title: "Founder at coverwala",
  },
  {
    imageUrl: "/nk_craft.png",
  name: "Ankit Singh",
  title: "Founder at coverwala",
},
{
  imageUrl: "/techorca.png",
name: "Ankit Singh",
title: "Founder at coverwala",
},

     
    
  ];

export const Partner = () => {
  return (

    <>
    <h2 className='text-3xl md:text-5xl font-bold text-center text-white mt-[4rem]'>Our <span className='text-red-600'>Partners</span></h2>
    <div className='m-[2rem]  flex justify-center'>
        <InfiniteMovingCards
        items={brands}
        direction="left"
        speed="slow"
        />
    </div>
        </>
  )
}

export default Partner