import Image from "next/image"
import Link from "next/link"

import { FC } from 'react'
import { BiInjection } from "react-icons/bi"

interface Services_cardProps {
  icon: string
  title: string
  description: string
  lightbg: string
  darkbg: string
  scale: string
}


const Services_Card: FC<Services_cardProps> = ({icon, title, description, lightbg, darkbg, scale})  => {
 
  return (
    <div className="relative group h-[60vh] shadow-xl px-5 pt-10 pb-10 rounded-lg bg-white overflow-hidden">

      <div className="flex justify-center">
        <div className="absolute bottom-[-100px] left-[-100px]  rounded-full w-[500px] h-[500px] bg-red-300">
       <BiInjection className="absolute bottom-0 top-0 right-0 left-0 m-auto text-red-200"  size={400}/> 
        </div>
        </div>
        <div className="absolute h-full">
        <h2 className="font-bold text-center text-accent text-2xl md:text-lg mb-[100px]">{title}</h2>
          <ul className="grid grid-cols-2 gap-5 items-center text-center text-primarytext font-bold">
            <li className="truncate ">
            COMPLETE BLOOD COUNT W/ PLATELET     </li>
<li className="truncate"> COUNT</li>
<li className="truncate">PLATELET COUNT</li> 
<li className="truncate">HGB/HCT (H&H)</li> 
<li className="truncate">ESR</li> 
<li className="truncate">PLATELET COUNT</li> 
 <li className="truncate">CLOTTING/ BLEEDING TIME</li>
<li className="truncate"> ABO + RH TYPING </li>
 <li className="truncate">PT (INR)</li>
 <li className="truncate">APTT</li>

       
          </ul>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2">
            <div className={`bg-red-700 duration-1000 rounded-full w-[25px] h-[25px]`}></div>
            <Link href="/development" className="font-bold text-lg text-accent">READ MORE</Link>
        </div>
    </div>
  )
}








export default Services_Card;


