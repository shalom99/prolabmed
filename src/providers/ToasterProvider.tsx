'use client'

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
  return (
    <Toaster toastOptions={
      {duration: 3000,
      style: {
        border: '1px solid green',
        padding: '16px'
      }}
      
    } />
)
}

export default ToasterProvider