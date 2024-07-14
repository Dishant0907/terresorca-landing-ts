import ShineBorder from "./magicui/shine-border";
import { SiTicktick } from "react-icons/si";

const features = [
    "Listing Optimization",
    "Campaign Management",
    "Performance Monitoring",
    "Customer Relationship Management",
    "Dynamic Pricing Strategies",
    "Enhanced Product Visualization",
    "Advanced Analytics",
];




export function Pricing() {
    return (

        <>
<div className=" mt-[5rem] md:mt-[9rem] ">
<p className="md:text-5xl text-3xl  flex-wrap    text-white font-bold flex justify-center">No <span className="text-red-600 mx-3"> Hidden</span> Charges!,  Just it</p>
</div>        
        <section className="md:w-[25rem] w-[20rem] flex md:my-[9rem] my-[2rem] mx-auto   backdrop-blur-lg ">
            <ShineBorder
                className="relative border-none  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderWidth={1}
            >

                <h1 className="absolute md:top-[2rem] top-[1rem] md:left-[8rem] text-2xl font-normal">Pricing Plan</h1>

                <h1 className="text-4xl absolute md:top-[7rem] top-[5.5rem] font-bold md:left-[4rem]">15%-20%/Sales</h1>

                <div className="absolute md:top-[12rem] top-[9.5rem] font-bold left-[2.6rem] md:left-[6rem]">
                    {
                        features.map((feature, key) => (
                            <div className="flex gap-2 my-4" key={key}>
                                <div className="mt-1 text-green-400"><SiTicktick />
                                </div>
                                <h1 className="font-light text-[14px] ">{feature}</h1>


                            </div>

                        ))
                    }


                </div>


            </ShineBorder>
        </section>

        </>

    );
}
