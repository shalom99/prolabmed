import Accredited from '@/sections/Accredited'
import Clinic_gallery from '@/sections/Clinic_gallery'
import Landing from '@/sections/Landing'
import Landing_about from '@/sections/Landing_about'
import Landing_services from '@/sections/Landing_services'

import Testimonials from '@/sections/Testimonials'

export default function Home() {
  return (
    <main>
     
      <Landing />
      <Accredited/>
      <Landing_about />
      <Landing_services />
      <Clinic_gallery />
      <Testimonials />
    </main>
  )
}
