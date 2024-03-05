import { Contact } from "@/components/Contact";
import {HeroSection}  from "@/components/HeroSection"
import Partner from "@/components/Partner";
import { Percentage15 } from "@/components/Percentage15";
import { Testimonial } from "@/components/Testimonial";
import { WhatTerresorcaDo } from "@/components/WhatTerresorcaDo";
import {Navbar} from "@/components/Navbar";
import { MacbookScrollDemo } from "@/components/macbook-scroll";
import { Foooter } from "@/components/footer";



export default function Home() {
 
  return (

    <main className="min-h-screen w-full overflow-x-hidden   bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      {/* <h1 className="text-2xl <Navbar/>text-center">billi with billa</h1> */}
      <Navbar/>
      <HeroSection/>
      
      <Testimonial/>
      <WhatTerresorcaDo/>
      <Partner/>
      
      <Percentage15/>
      <Contact/>

      <Foooter/>
      
      
      
    </main>

  );
}
