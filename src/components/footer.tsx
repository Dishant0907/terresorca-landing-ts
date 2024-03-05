
"use client"
import React from 'react';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full py-12 bg-black sm:py-16 lg:py-20 dark:bg-black">
      <div className="container grid-in-container flex flex-col items-center justify-center gap-6 px-2 text-center md:gap-8 md:px-6 lg:flex-row lg:justify-between xl:gap-10">
        <div className="flex flex-col gap-2 items-center lg:items-center lg:gap-1 lg:order-2">
          <p className="tracking-wide text-2xl text-gray-500 lg:order-2 text-center dark:text-gray-200 ">We are Social</p>
          <div className="flex items-center justify-center space-x-4 lg:space-x-2 lg:order-1">
            <Link href="#">
              <a className="text-gray-200 rounded-full dark:text-blue-600">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-4 h-4" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/terresorca/" target="_blank">
              <a className="text-gray-200 rounded-full dark:text-blue-200">
                <span className="sr-only">Linkedin</span>
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/terresorca?igsh=MXc3Mm15amd3Z2oxdQ==" target="_blank">
              <a className="text-gray-200 rounded-full dark:text-pink-500">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
        <nav className="flex flex-col gap-2 lg:gap-4 xl:gap-2">
          <Link href="https://drive.google.com/file/d/1DtjJ9_NFC-bSYWcPTevnUcO7UNpDO2Fh/view?usp=drivesdk" target="_blank">
            <a className="text-gray-200 transition-colors hover:underline dark:text-white hover:text-gray-50">
              Terms & Conditions
            </a>
          </Link>
          <Link href="https://drive.google.com/file/d/1DtvFyMxmKxxWyZ8VuCQ2L_uBKISjB2mN/view?usp=drivesdk" target="_blank">
            <a className="text-gray-200 transition-colors hover:underline dark:text-white hover:text-gray-50">
              Spread the Word, Get Rewarded!
            </a>
          </Link>
          <Link href="#">
            <a className="text-gray-200 transition-colors hover:underline dark:text-white hover:text-gray-50">
              Pricing
            </a>
          </Link>
          <Link href="#">
            <a className="text-gray-200 transition-colors hover:underline dark:text-white hover:text-gray-50">
              Contact Us
            </a>
          </Link>
        </nav>
        <Link href="#">
          <a className="flex items-center gap-2 font-semibold lg:order-1 lg:gap-1">
            {/* Your content here */}
          </a>
        </Link>
        <div className="flex items-center justify-center space-x-4 lg:order-2 lg:justify-end lg:space-x-2">
          <Link href="#">
            <a className="text-gray-200 underline underline-offset-2 dark:text-gray-800">
              Terms
            </a>
          </Link>
          <Link href="#">
            <a className="text-gray-200 underline underline-offset-2 dark:text-gray-800">
              Privacy
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
 
  }

  function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }