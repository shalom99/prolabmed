import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";

export default function Landing_about() {
  return (
    <div className="px-2 md:px-[10%] md:h-screen  flex flex-col lg:flex-row gap-10 pb-10">

      {/* left */}
      <div className="w-full lg:w-[40%] h-[437px]  md:h-[90%] lg:h-[90%] mx-auto bg-person2 bg-cover bg-center rounded-b-full">
        
      </div>
      {/* right */}
      <div className="lg:w-[50%] flex flex-col justify-center gap-3">
        <h2 className="font-bold text-accent">  ABOUT US</h2>
        <h3 className="2xl:text-6xl text-4xl font-bold">Best Laboratory For Testing And Research</h3>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          dolorum blanditiis. Rem veniam impedit repellendus!
        </p>
        <p>
     
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa porro
          tempore quas ad harum perferendis blanditiis delectus consectetur et
          cupiditate.
        </p>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BsCheckLg className="text-primarybg" size={35}  /> 
            <p className="font-semibold text-md">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-center gap-2">
            <BsCheckLg className="text-primarybg" size={35}  /> 
            <p className="font-semibold text-md">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-center gap-2">
            <BsCheckLg className="text-primarybg" size={35}  /> 
            <p className="font-semibold text-md">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-center gap-2">
            <BsCheckLg className="text-primarybg" size={35}  /> 
            <p className="font-semibold text-md">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/" className="grow lg:grow-0 text-center text-primarytext bg-primarybg py-4 lg:p-5 rounded-lg font-bold text-sm hover:bg-darkerbg hover:text-white duration-500">OUR HISTORY</Link>  
          <Link href="/" className="grow lg:grow-0 text-center text-primarytext bg-primarybg py-4 lg:p-5 rounded-lg font-bold text-sm hover:bg-darkerbg hover:text-white duration-500">ABOUT US</Link>
        </div>

      </div>
    </div>
  );
}
