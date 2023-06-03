import { FC, ReactNode } from 'react'

interface FormWrapperProps {
  title: string
  children: ReactNode
}

const FormWrapper: FC<FormWrapperProps> = ({title, children}) => {
  return (
    <>
        <h2 className="text-center mb-5">{title}</h2>
        <div className='grid lg:grid-cols-2'>{children}</div>
    </>
  )
}

export default FormWrapper