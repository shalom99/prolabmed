'use client'

import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsFiletypePdf } from 'react-icons/bs'
import { GrPersonalComputer } from 'react-icons/gr'
import { twMerge } from "tailwind-merge";


export default function Page() {
  const currentDate = format(new Date(), "yyyy-MM-dd")
  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  return (
    <>
    
    <div className='grid grid-cols-12 '>

    <header className={twMerge(sideMenuOpen ? "col-span-9 order-2" : "col-span-12 order-1", " flex justify-between items-center bg-primarybg text-primarytext px-2 py-2")}>
        <div className="flex items-center gap-2">
          <BiMenuAltRight
            size={50}
            onClick={() => setSideMenuOpen((prev) => !prev)}
            className="text-primarytext"
          />
          <h1 className="font-bold text-lg">CASTRO, SHALOM CAMORA</h1>
        </div>

        <div className="flex gap-5">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </header>

      {/* side menu */}
        <div className={twMerge(sideMenuOpen ? 'col-span-3 order-1 flex items-center justify-center gap-5' : 'hidden'  )}>
          <Image src="/logo_only.webp" width={60} height={60} alt="Logo" /> 
          <h1 className='font-bold'>Pro-Lab Diagnostics</h1>
        </div>
        <div className={twMerge(sideMenuOpen ? "col-span-3 order-3 flex items-center" : "hidden" )}>
          <div className="grow flex items-center gap-3 py-4 px-5 bg-yellow-600 border" >
            <GrPersonalComputer size={30} />
            <h1>Online Results</h1>
          </div>
        </div>
        <nav className={twMerge(sideMenuOpen ? "col-span-3 order-6 bg-white flex flex-col gap-y-5 py-2 pl-10" : "hidden")}>
          <Link href="/results/dashboard" className="">ALL RESULTS</Link>
          <Link href="/results/dashboard" className="">LABORATORY</Link>
          <Link href="/results/dashboard" className="">IMAGING</Link>
          <Link href="/results/dashboard" className="">HISTOPATH</Link>
          <Link href="/results/dashboard" className="">PRE-EMP/APE</Link>
          <Link href="/results/dashboard" className="">MISSION</Link>
          <Link href="/results/dashboard" className="">MICROBIOLOGY</Link>
          <Link href="/results/dashboard" className="">SPECIAL TEST</Link>
        </nav>
        {/* end side menu */}

    
    <div className={twMerge(sideMenuOpen ? 'col-span-9 order-4' : 'col-span-12 order-2',' border bg-primarybg py-4 px-5')}>Home / Dashboard</div>
    <div className={twMerge(sideMenuOpen ? 'col-span-9 order-last' : 'col-span-12 order-3')}>
     <div className='p-5'>
        <h1 className='text-2xl font-semibold'>Laboratory Results</h1>

        <form action="" className='flex flex-col lg:flex-row lg:items-center gap-5 my-5'>
          <div className='flex flex-col'>
          <label htmlFor="">Order Date From:</label>
          <input type="date" className='text-lg text-gray-400 border px-2 py-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
          <label htmlFor="">Order Date To:</label>
          <input type="date" className='text-lg text-gray-400 border px-2 py-2 rounded-lg' defaultValue={currentDate} max={currentDate} />
          </div>
          <div className='flex flex-col'>
          <label htmlFor="">Sort By</label>
          <select name="" id="" className='text-lg text-gray-400 border px-2 py-2 rounded-lg'>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
          </div>
          <div><button type="submit" className='px-3 py-2 bg-green-700 rounded-md'>Search</button></div>
        </form>

        <div className='overflow-x-auto'>
        <table className='table-auto'>
          <thead className='bg-blue-200'>
            <tr>
              <th className='px-5 py-2 border-2'>Lab No.</th>
              <th className='px-5 py-2 border-2'>Branch</th>
              <th className='px-5 py-2 border-2'>Order Date</th>
              <th className='px-5 py-2 border-2'>Patient ID</th>
              <th className='px-5 py-2 border-2'>Patient Name</th>
              <th className='px-5 py-2 border-2'>Account</th>
              <th className='px-5 py-2 border-2'>Gender</th>
              <th className='px-5 py-2 border-2'>Age</th>
              <th className='px-5 py-2 border-2'>Type</th>
              <th className='px-5 py-2 border-2'>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
            <tr>
              <td className='px-5 py-2 border-2'>2236016038</td>
              <td className='px-5 py-2 border-2'>BAGUIO</td>
              <td className='px-5 py-2 border-2'>July 30, 2022</td>
              <td className='px-5 py-2 border-2'>BGO16276</td>
              <td className='px-5 py-2 border-2'>CASTRO, SHALOM CAMORA</td>
              <td className='px-5 py-2 border-2'>PLDT INC. - MAKATI(WALK-IN)</td>
              <td className='px-5 py-2 border-2'>MALE</td>
              <td className='px-5 py-2 border-2'>24</td>
              <td className='px-5 py-2 border-2'>X-RAY</td>
              <td className='px-5 py-2 border-2'> <BsFiletypePdf size={30} className='mx-auto hover:cursor-pointer' onClick={() => toast('test download')} /></td>
            </tr>
          </tbody>
        </table>
        </div>

     </div>
     </div>
     </div>
     </>
)
}

