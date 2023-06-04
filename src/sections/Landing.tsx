"use client";
import {useState} from 'react'
import Link from "next/link";
import { RiUserStarLine } from "react-icons/ri";
import { GiOnTarget } from "react-icons/gi";
import { BsAward } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";
import AppointmentModal from '@/components/modals/AppointmentModal';



export default function Landing() {
  const [isOpen, setIsOPen] = useState(false)  

  return (
    <>
    <div className="flex justify-start w-full h-screen lg:h-screen md:pt-20 lg:pt-0 px-2 text-primarytext">
      <div className="lg:flex w-full">

        {/* left */}
        <div className="lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-full lg:pl-[10%] flex flex-col justify-center gap-2 md:gap-3">
          <Slide duration={1500} triggerOnce>
          <p className="text-center text-xl lg:text-start font-bold text-accent">WELCOME TO PRO-LAB</p>
          </Slide>
          <Fade duration={2500} delay={1000} triggerOnce>


          <h2 className="text-center text-3xl font-bold lg:text-start lg:text-5xl xl:text-6xl 2xl:text-7xl lg:w-[700px]">Accurate results for healthier lives</h2>
          </Fade>
          <h3 className="lg:w-[600px] text-slate-600 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nesciunt numquam maiores accusantium sunt ab.
          </h3>
          <div className="flex justify-evenly lg:justify-normal gap-2 lg:gap-6">
            <button onClick={() => setIsOPen(true)} className="grow lg:grow-0 text-center lg:px-5 text-sm font-bold bg-primarybg text-primarytext py-4 rounded-lg hover:bg-darkerbg hover:text-white duration-500">
              APPOINTMENT
            </button>
            <Link href="/results" className="grow lg:grow-0 lg:px-5 text-center text-sm font-bold bg-primarybg text-primarytext py-4 rounded-lg hover:bg-darkerbg hover:text-white duration-500">
              ONLINE RESULTS
            </Link>
          </div>


          <div className="flex flex-col lg:flex-row lg:items-start items-center gap-5 lg:gap-10">

          
            <div className="w-full flex items-center gap-5 lg:max-w-[223px] p-5 border rounded-lg border-gray-200 group hover:border-blue-700 duration-1000">
              <div className="">
                <RiUserStarLine
                  size={50}
                  className="p-2 bg-blue-200 text-blue-700 rounded-full group-hover:bg-blue-700 group-hover:text-white duration-1000"
                />
              </div>
              <h3 className="">100% Customer Satisfaction</h3>
            </div>

            <div className="w-full flex items-center gap-5 lg:max-w-[223px] p-5 border rounded-lg border-gray-200 group hover:border-red-700 duration-1000">
              <div>
                <GiOnTarget
                  size={50}
                  className="p-2 text-red-700 bg-red-200 rounded-full group-hover:bg-red-700 group-hover:text-white duration-1000"
                />
              </div>
              <h3>Help and Access is Our Mission</h3>
            </div>

            <div className="w-full flex items-center gap-5 lg:max-w-[223px] p-5 border rounded-lg border-gray-200 group hover:border-green-700 duration-1000">
              <div>
                <BsAward
                  size={50}
                  className="p-2 text-green-700 bg-green-200 rounded-full group-hover:bg-green-700 group-hover:text-white duration-1000"
                />
              </div>
              <h3>100% Quality Laboratory service</h3>
            </div>

         
          </div>

        </div>

        {/* right */}
        <div className="hidden lg:block w-[40%] h-[90%] 2xl:h-[90%] bg-person1 pb-20 bg-cover bg-no-repeat bg-top rounded-b-full"></div>
      </div>
    </div>


  <AppointmentModal open={isOpen} onClose={() => setIsOPen(false)} />



</>
  );
}
