import DashboardHeader from '@/components/headers/DashboardHeader'
import { FC } from 'react'

type pageProps = {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <>
    <DashboardHeader />
     <div>Online results Dashboard page</div>
     </>
)
}

export default page