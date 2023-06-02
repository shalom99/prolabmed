'use client'
import AccountForm from '@/components/AccountForm'
import AddressForm from '@/components/AddressForm'
import UserForm from '@/components/UserForm'
import AppointmentModal from '@/components/modal/AppointmentModal'
import { useMultistepForm } from '@/lib/useMultistepForm'
import { FC, FormEvent, useState } from 'react'
import ServicesForm from '@/components/ServicesForm'
import ConfirmForm from '../ConfirmForm'

type pageProps = {
  
}


type FormData = {
  firstName: string
  lastName: string
  age: string
  email: string
  password: string
  date: string
  service: string
}

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  date: "",
  service: "",
}

const StepperModal: FC<pageProps> = ({}) => {
const [isOpen, setIsOPen] = useState(false)  
const [data, setData] = useState(INITIAL_DATA)
function updateFields(fields: Partial<FormData>) {
  setData(prev => {
    return {...prev, ...fields}
  })
}
const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<UserForm {...data} updateFields={updateFields} />, <ServicesForm {...data} updateFields={updateFields} /> ,<ConfirmForm {...data} updateFields={updateFields}  />])

function onSubmit(e:FormEvent) {
  e.preventDefault();
  if(!isLastStep) {
    return next()
  }else {
    alert("Succes Account Creation")
    setData(INITIAL_DATA)
  }

}

  return (
    <div>
  <div className='relative mx-auto bg-white border border-black p-2 m-5'>
    <h2 className='text-center font-bold'>Create an Appointment</h2>

    <form onSubmit={onSubmit}>
      <div className='absolute top-0 right-0'>
       {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div className='flex justify-end gap-5'>
        {!isFirstStep && <button type='button' onClick={back}>Back</button>}
   <button type='submit'>{isLastStep? 'Finish' : 'Next'}</button>
      
      </div>
    </form>
  </div>



  </div>
  )
}

export default StepperModal

