"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl text-base mx-auto z-50", className)}
    >


      <Menu setActive={setActive}>
        <Link href="/"><div className="flex">
          <div className="text-base font-bold ">TERRES</div>
          <div className="      ">
            <span className="text-white font-bold text-base bg-red-800 ">ORCA</span>
          </div>
        </div></Link>


      </Menu>

    </div>
  );
}



