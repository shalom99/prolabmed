import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="lg:px-[100px]  bg-primarybg text-primarytext">
      <div className="grid p-5 gap-10 lg:grid-cols-4 lg:py-10">
        <div className="flex flex-col gap-10">
          <div className="">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo_only.webp" width={60} height={60} alt="Logo" />
              <h1 className="text-3xl font-bold">PRO-LAB</h1>
            </Link>
          </div>

          <p className="text-2xl">We prioritize your health </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/prolab.meddiagnostic"
              target="_blank"
              className=" text-white bg-darkerbg p-2 rounded-full"
            >
              <FaFacebookF size={40} />
            </a>

            <a
              href="https://instagram.com/prolab.meddiagnostic?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              className="bg-darkerbg text-white p-2 rounded-full"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-5 font-semibold text-2xl">Contact Info</h2>

          <p className="mb-2">
            2nd Floor, MST Bldg., McArthur Highway, Paligui, Apalit, Pampanga,
            2016 2016 Apalit, Philippines
          </p>

          <p className="mb-2">(0969) 393 3494</p>
          <p className="mb-2">prolab.meddiagnostic@gmail.com</p>
          <p className="">Clinic Hours: 6AM - 4PM</p>
        </div>
        <div>
          <h2 className="mb-5 font-semibold text-2xl">Useful Links</h2>
          <nav className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              {" "}
              <AiOutlineRight /> Services
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <AiOutlineRight /> Online Appointment
            </Link>

            <Link href="/" className="flex items-center gap-2">
              {" "}
              <AiOutlineRight />
              About Us
            </Link>
            <Link href="/" className="flex items-center gap-2">
              {" "}
              <AiOutlineRight />
              Contact
            </Link>
            <Link href="/" className="flex items-center gap-2">
              {" "}
              <AiOutlineRight />
              FAQs
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="mb-5 font-semibold text-2xl"> Like Us On Facebook</h2>

          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprolab.meddiagnostic&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
          
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-center border-t border-t-primarytext pt-10 pb-10">
        <p className="text-center text-sm font-semibold lg:text-start mb-5 lg:mb-0">
          &#169; Copyright 2023 Pro-lab Medical and Diagnostics Clinic Inc.
        </p>
      </div>
    </footer>
  );
}
