import React from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

export default function page() {
  return (
    <div className='h-screen md:h-auto md:pb-10 md:pt-[100px]'>
        <div className='xl:w-[70%] mx-auto px-3 pt-5'>
          <h2 className='text-3xl text-primarytext font-bold mb-5'>Login for Patients</h2>
          <form action="submit" className='flex flex-col gap-2'>
            <label htmlFor="" className='text-lg font-semibold'>Username:</label>
            <input type="text" placeholder='Username' className='text-lg border md:w-[300px] rounded-md border-black p-3 mb-5'/>
            <label htmlFor="" className='font-semibold'>Password:</label>
            <input type="Password" placeholder='Password' className='text-lg border border-black p-3 rounded-md md:w-[300px]'/>
            <a href="/" className='mt-3 text-red-700 underline '>Forgot your password?</a>
            <div className='flex gap-2 items-center'>
            <BsFillExclamationCircleFill size={30} />
            <p>  You may refer to the instructions below for your login details.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vel ipsa necessitatibus impedit recusandae eveniet repudiandae commodi veritatis dicta voluptatum!
            </p>
            <button disabled className='text-lg md:w-[300px] rounded-md my-5 py-2 text-white bg-darkerbg'>LOGIN</button>
          </form>
          <div>
            <h3 className='font-bold text-lg'>How to change your password?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa possimus rerum, veniam ducimus molestiae blanditiis consequatur eius exercitationem at numquam?</p>
          </div>
        </div>

    </div>
  )
}
