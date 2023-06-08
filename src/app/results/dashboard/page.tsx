import DashboardHeader from '@/components/headers/DashboardHeader'
import { format } from 'date-fns'
import { FC } from 'react'

type pageProps = {
  
}

const page: FC<pageProps> = ({}) => {
  const currentDate = format(new Date(), "yyyy-MM-dd")
  return (
    <>
    <DashboardHeader />
    <div className='bg-primarybg py-4 px-5'>Home / Dashboard</div>
     <div className='p-5'>
        <h1 className='text-2xl font-semibold'>Laboratory Results</h1>

        <form action="" className='flex flex-col gap-5 my-5'>
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
          <thead>
            <tr>
              <th>Lab No.</th>
              <th>Branch</th>
              <th>Order Date</th>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Account</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2236016038</td>
              <td>BAGUIO</td>
              <td>July 30, 2022</td>
              <td>BGO16276</td>
              <td>CASTRO, SHALOM CAMORA</td>
              <td>PLDT INC. - MAKATI(WALK-IN)</td>
              <td>MALE</td>
              <td>24</td>
              <td>X-RAY</td>
            </tr>
            <tr>
              <td>2236016038</td>
              <td>BAGUIO</td>
              <td>July 30, 2022</td>
              <td>BGO16276</td>
              <td>CASTRO, SHALOM CAMORA</td>
              <td>PLDT INC. - MAKATI(WALK-IN)</td>
              <td>MALE</td>
              <td>24</td>
              <td>X-RAY</td>
            </tr>
          </tbody>
        </table>
        </div>

     </div>
     </>
)
}

export default page