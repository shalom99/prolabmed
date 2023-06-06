import Image from "next/image"
import Link from "next/link"


type ServiceCardProps = {
  icon: string
  title: string
  description: string
  lightbg: string
  darkbg: string
  scale: string
}

export default function Service_Card({icon, title, description, lightbg, darkbg, scale}: ServiceCardProps) {
 
  return (
    <div className="group shadow-xl px-10 pt-10 pb-10 rounded-lg bg-white h-[500px] lg:h-auto flex flex-col">

      <div className="flex justify-center">
        <div className={`mb-10 ${lightbg} duration-1000 ${scale} rounded-full  text-blue-900`}>
        <Image className=" p-7" src={`/icons/${icon}.svg`} width={100} height={100} alt="services logo"/>
        </div>
        </div>
        <h2 className="font-bold text-md mb-5">{title}</h2>
        <div className="grow">
        <p className="mb-10 text-sm">{description + description}</p>
        </div>
        <div className="flex items-center gap-2">
            <div className={`${lightbg} ${darkbg} duration-1000 rounded-full w-[25px] h-[25px]`}></div>
            <Link href="/development" className="font-bold text-sm">READ MORE</Link>
        </div>
        
    </div>
  )
}
