
'use client'

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { SparklesCore } from "./ui/sparkles";

const words ="Fueling Growth: Let's Sprout Success, Sharing upto 20%"
export const Percentage15 = () => {
    return(
        <div className="relative flex flex-col items-center p-8 justify-center border-2 border-gray-900 my-[3rem] mx-[1rem] rounded-lg">
             <div className="w-full absolute inset-0 ">
             <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
             </div>

            <TextGenerateEffect words={words}/>

        </div>

        
    )
}