import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/forPartner'
 
const brands = [
    {
        imageUrl:
        "/bic_img.jpg",
      name: "Yuvraj Bansal",
      title: "Founder at Yuka",
    },
    
    {
        imageUrl: "/inkpiration_img.jpg",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    {
        imageUrl: "/muscles_matter_img.jpg",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    {
        imageUrl: "/sawali_farm_img.png",
      name: "Ankit Singh",
      title: "Founder at coverwala",
    },
    

     
    
  ];

export const Partner = () => {
  return (

    <>
    <h2 className='text-3xl font-bold text-center text-white mt-[7rem]'>Our Partners</h2>
    <div className='m-[3rem]  flex justify-center'>
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