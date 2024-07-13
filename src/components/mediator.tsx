"use client";

import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
 
Circle.displayName = "Circle";


export function Mediator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <>

      <div className=" px-2 mt-[5rem] ">
        <p className="text-white  flex-wrap text-3xl  md:text-5xl flex justify-center font-bold">Bridging the <span className="text-red-600 mx-3">Gap</span> Between <span className="text-red-600 mx-3  ">You</span> and <span className="text-red-600 mx-3 ">Online Sales</span>

        </p>
      </div>



      <div
        className="relative mb-16 mt-[1rem] flex w-full max-w-[800px] mx-auto items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.amazon />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.user1 />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.myntra />
            </Circle>
            <Circle ref={div4Ref} className="h-16 w-16">
              <Icons.terresorca />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.user2 />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Icons.flipkart />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.user3 />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </>
  );
}

const Icons = {
  myntra: () => (
    <img src="/myntra.png" alt="flipkart" width={200} height={200} />
  ),
  terresorca: () => (
    <img src="/Terresorca_logo.png" alt="Your Company Logo" width="100" height="100" />
  ),
  amazon: () => (
    <img src="https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg" alt="amazon" width={100} height={100} />
  ),
  flipkart: () => (
    <img src="/flipkart.png" alt="flipkart" width={200} height={200} />
  ),
  user1: () => (
    <img src="/user.png" alt="flipkart" width={200} height={200} />
  ),
  user2: () => (
    <img src="/user.png" alt="flipkart" width={200} height={200} />
  ),
  user3: () => (
    <img src="/user.png" alt="flipkart" width={200} height={200} />
  ),
};
