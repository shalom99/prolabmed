import DashboardHeader from '@/components/headers/DashboardHeader'
import { FC } from 'react'

type pageProps = {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <>
    <DashboardHeader />
     <div>Dashboard page</div>
     </>
)
}

export default page