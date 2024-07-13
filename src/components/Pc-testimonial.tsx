import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const testimonials = [
    {
      quote:
        "Collaborating with Terresorca has been an absolute joy. Their unwavering support, creativity, and dedication to our brand have elevated Yuka to new heights. Together, we've crafted exceptional products, provided top-notch service, and made sustainability a priority. Terresorca's customer-centric approach has driven sales and customer loyalty. Our shared vision of excellence is driving our success, and I'm excited for what the future holds.",
      name: "Yuvraj Bansal",
      title: "Founder at Yuka",
    },
    
    {
      quote: "Partnering with Terresorca was a game-changer for our business. Their innovative strategies and unwavering support propelled us to new heights. Since joining forces, our sales have seen a remarkable surge, exceeding all expectations.",
      name: "Sanjay Singh",
      title: "Founder at TechOrca",
    },
    
  ];


export const Pctestimonial = () => {
    return (
        <div className="h-[40rem] hidden md:block rounded-md flex flex-col antialiased bg-black  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden pz-4 sm:pz-6 lg:px-8">
            <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
            </div>
        
      </div>


    )
}
