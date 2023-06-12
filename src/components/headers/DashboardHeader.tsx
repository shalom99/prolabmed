"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenuAltRight, BiX, BiDialpad } from "react-icons/bi";
import {GrPersonalComputer} from 'react-icons/gr'
import { RiArrowDownSLine } from "react-icons/ri";

import { twMerge } from "tailwind-merge";

export default function DashboardHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const showHeader = pathname === "/results/dashboard";
  
  return (
    <>
      <header className="w-full flex justify-between items-center bg-primarybg text-primarytext px-2 py-2">
        <div className="flex items-center gap-2">
          <BiMenuAltRight
            size={50}
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="text-primarytext"
          />
          <h1 className="font-bold text-lg">Pro-Lab</h1>
        </div>

        <div className="flex gap-5">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </header>

    {/* Side Menu */}
    <div className={!navbarOpen ? "hidden" : "fixed inset-0 bg-gray-700 z-10"} onClick={() => setNavbarOpen((prev) => !prev)} />
      <div className={twMerge(navbarOpen?"left-[0] right-20":"left-[-100%] right-[100%]","fixed top-0 bottom-0  bg-blue-500 z-20 duration-1000")}>
        <div className="flex items-center px-3 py-2">
          <div className="flex items-center gap-3">
            <GrPersonalComputer size={30} />
            <h1>Online Results</h1>
          </div>
        </div>

        <nav className="bg-white flex flex-col gap-y-5 py-2 pl-10">
          <Link href="/results/dashboard" className="">ALL RESULTS</Link>
          <Link href="/results/dashboard" className="">LABORATORY</Link>
          <Link href="/results/dashboard" className="">IMAGING</Link>
          <Link href="/results/dashboard" className="">HISTOPATH</Link>
          <Link href="/results/dashboard" className="">PRE-EMP/APE</Link>
          <Link href="/results/dashboard" className="">MISSION</Link>
          <Link href="/results/dashboard" className="">MICROBIOLOGY</Link>
          <Link href="/results/dashboard" className="">SPECIAL TEST</Link>

        </nav>

      </div>
  

    </>
  );
}
