"use client"

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";



const services =  [
  {
    title: "Expert Product Optimization",
    description: "Our team of experts will fine-tune your product listings to ensure they stand out and rank higher on leading e-commerce platforms."
  },
  {
    title: "Real-time Inventory Management",
    description: "Stay on top of your inventory effortlessly with real-time updates, preventing stockouts and overselling."
  },
  {
    title: "Performance Analytics",
    description: "Track your sales, monitor your product's performance, and make data-driven decisions to enhance your online presence."
  },
  {
    title: "Cross-Platform Promotion",
    description: "Expand your reach by promoting your products across multiple e-commerce platforms for maximum exposure."
  },
  {
    title: "Customized Branding Strategies",
    description: "We'll work with you to develop branding strategies tailored to your unique products and target audience."
  },
  {
    title: "Comprehensive Sales Tracking",
    description: "Get detailed insights into your sales, allowing you to understand your customers and optimize your marketing efforts."
  }
];

export const WhatTerresorcaDo = () => {
  return (
    <>

      <div className="flex justify-center ">

      <h2 className="text-3xl mx-2 font-bold text-white text-center mb-[4rem]" >What </h2>
      <h2 className="text-3xl mx-2 text-[#FF0000] font-bold text-center mb-[4rem]" >Terresorca </h2>
      <h2 className="text-3xl  mx-2 font-bold text-white text-center mb-[4rem]" >  Do ? </h2>


      
      </div>
        <div className=" w-full mx-auto  px-auto  grid grid-cols-1 gap-8 md:mx-auto   sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 md:gap-6  lg:gap-6 ">
        {services.map((service, key) => (
          <div className="w-[20rem] mx-auto "  key={key}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 h-[14rem]   bg-zinc-900">
              {/* Uncomment the Image component if needed */}
              {/* <Image4
                src={`/jordans.webp`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              /> */}
              <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
                {service.title}
              </p>
              <p className="text-sm  text-neutral-400">
                {service.description}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </>
  );
};
