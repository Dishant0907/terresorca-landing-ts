'use client'

import { Spotlight } from "@/components/ui/Spotlight"
import { Button } from "@/components/ui/moving-border";
import Link from "next/link"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
 

const words = [
  {
    text: "Unleash",
  },
  {
    text: "the",
  },
  {
    text: "Potential",
    className: "text-blue-500 dark:text-red-500",
  },
  {
    text: "of",
  },
  {
    text: "your",
  },
  {
    text: "brand.",
     // Add the class for styling this specific word
  },
];



const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];


export const HeroSection = () => {
  return (
    <div className="h-auto md:h-[49rem]  w-full rounded-md flex flex-col items-center justify-center relative dark:bg-grid-white/[0.05]    ">

      <div className=" p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-20 sm-android:-top-2"
          fill="red"
        />
        <h1 className="mt-[14rem]   md:mt-[22rem] ml[7rem] text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Unleash the <span className="text-red-800 "> Potential</span> of your Brand</h1>

        {/* <div className="mt-[23rem] md:mt-[22rem]  sm-android:m-9 sm-android:mt-[8rem]   text-4xl md:text-7xl font-bold  text-center flex justify-center  text-transparent  ">
        <TypewriterEffectSmooth  words={words} />

        </div> */}
       
        
        <p className="mt-4 font-normal mx-8 text-base md:text-lg  md:mx-auto text-neutral-500 max-w-lg ">Partner with Terresorca and Boost Your Online Sales with Our Low Fees!

</p>


      </div>
      <Link className="mt-[5rem]" href={"#contact"}>
        <Button
          borderRadius="1.75rem"
          className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Call
        </Button>

        


      </Link>



    </div>
  )
}

