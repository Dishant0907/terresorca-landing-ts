"use client"

import { useState } from 'react';
import axios from 'axios';
import { BackgroundBeams } from "./ui/background-beams";

export const Contact = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted successfully:', e);
    try {
        alert("Thanks, for reaching out to us. we will connect shortly")
        console.log(email)
      const response = await axios.post('https://formspree.io/f/xjvnrzkj', { email, phone });
      // console.log('Form submitted successfully:', response.data);
      // Optionally, you can do something after successful form submission
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (

    




    
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 mb-8 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b text-white text-center font-sans font-bold">
          Connect with Us
        </h1>
        
        <div>
        
        
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="hi@terresorca.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            placeholder="91-8750896040"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-neutral-800 mb-4 focus:ring-2 focus:ring-teal-500 p-4 w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <button type="submit"  className="bg-black border border-gray-500 w-full hover:bg-gray-900 p-4  rounded-md"  >Contact</button>
        </form>

        
      </div>
      {/* <BackgroundBeams /> */}
    </div>

    </div>
  );
};
