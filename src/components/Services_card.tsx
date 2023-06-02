import Image from "next/image"
import Link from "next/link"

import { FC } from 'react'

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
    <div className="group shadow-xl px-10 pt-10 pb-10 rounded-lg bg-white">
      <div className="flex justify-center">
        <div className={`mb-10 ${lightbg} duration-1000 ${scale} rounded-full max-w-[100px] max-h-[100px]  text-blue-900`}>
        <Image className="p-7" src={`/icons/${icon}.svg`} width={150} height={150} alt="services logo"/>
        </div>
        </div>
        <h2 className="font-bold text-xl md:text-lg  mb-5">{title}</h2>
        <p className="mb-10">{description}</p>
        <div className="flex items-center gap-2">
            <div className={`${lightbg} ${darkbg} duration-1000 rounded-full w-[25px] h-[25px]`}></div>
            <Link href="/development" className="font-bold text-sm">READ MORE</Link>
        </div>
    </div>
  )
}








export default Services_Card;


