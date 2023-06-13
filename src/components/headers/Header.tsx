"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenuAltRight, BiX, BiDialpad } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import AppointmentModal from "../modals/AppointmentModal";




export default function Header() {
  const [isOpen, setIsOPen] = useState(false)  
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const showHeader = pathname === '/results/dashboard'

  function openAppointment() {
    setNavbarOpen(false) 
    setIsOPen(true)
  }

  if(showHeader){
    return null;
  }

  return (
    <>
    <header className="">

      {/* mobile menu */}

      <div className="md:hidden flex justify-between p-2 text-primarytext bg-primarybg ">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_only.webp" width={60} height={60} alt="Logo" />
            <h1 className="text-2xl text-primarytext font-bold">Pro-Lab</h1>
          </Link>
        
        </div>
        <div>
          <BiMenuAltRight
            size={50}
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="text-primarytext"
          />
        </div>
      </div>

      {/* mobile menu nav */}

      {navbarOpen == true ? (
        <div className="fixed bg-primarybg top-0 h-screen w-full z-10">
          <div className="flex justify-end p-5">
            <BiX size={50} className="text-primarytext"  onClick={() => setNavbarOpen(false)} />
          </div>
          <nav className="flex flex-col pl-10 pr-5 pt-10 gap-10 text-primarytext text-center">
            <Link
              href="/"
              onClick={() => setNavbarOpen(false)}
              className="border-b pb-5 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/development"
              onClick={() => setNavbarOpen(false)}
              className="border-b pb-5 font-semibold"
            >
              Services
            </Link>
            <button
              onClick={openAppointment}
              className="active border-b pb-5 font-semibold"
            >
              Appointment
            </button>
            <Link
              href="/results/login"
              className="border-b pb-5 font-semibold"
              onClick={() => setNavbarOpen(false)}
            >
              Online Results
            </Link>

            <Link
              href="/development"
              className="border-b pb-5 font-semibold"
              onClick={() => setNavbarOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/development"
              className="border-b pb-5 font-semibold"
              onClick={() => setNavbarOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : (
        ""
      )}

      {/* desktop menu */}
      <div className="hidden md:flex lg:w-[100%] py-3 px-5 items-center justify-between shadow-md mx-auto z-10 bg-primary">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_only.webp" width={60} height={60} alt="Logo" />
            <h1 className="text-lg 2xl:text-4xl text-primarytext font-bold">Pro-Lab</h1>
          </Link>
        </div>
        <nav className="flex gap-5 text-xl text-primarytext">
          <Link href="/development" className="hover:text-accent duration-500">
            Services
          </Link>
          <button onClick={() => setIsOPen(true)} className="hover:text-accent duration-500">
            Appointment
          </button>

          <Link href="/results/login" className={pathname == '/results/login' ? "text-accent" : "hover:text-accent duration-500" }>
            Online Results
          </Link>

          <Link href="/development" className={pathname == '/development' ? "text-accent" : "hover:text-accent duration-500" }>
            About Us
          </Link>
          <Link href="/development" className={pathname == '/development' ? "text-accent" : "hover:text-accent duration-500" }>
            Contact
          </Link>
        </nav>

        <div className="md:hidden xl:flex items-center gap-5 text-primarytext rounded-lg p-3 bg-gradient-to-r from-rose-100 to-teal-100">
          <a
            href="https://www.facebook.com/prolab.meddiagnostic"
            target="_blank"
            className="hover:bg-primarytext hover:text-primarybg p-2 rounded-lg duration-200"
          >
            <FaFacebookF size={30} />
          </a>

          <a
            href="https://instagram.com/prolab.meddiagnostic?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            className="hover:bg-primarytext hover:text-primarybg p-2 rounded-lg duration-200"
          >
            <FaInstagram size={30} />
          </a>

          <div className="m-1 flex items-center gap-2 bg-primarytext p-2 rounded-xl text-primarybg">
            <BiDialpad size={30} />
            <h3> HELPDESK: (0969) 393 3494</h3>
          </div>
        </div>
      </div>
    </header>

<AppointmentModal open={isOpen} onClose={() => setIsOPen(false)} />

</>
  );
}
