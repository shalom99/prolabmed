import { FC } from 'react'

import Modal from './Modal'


type AppointmentModalProps = {
  open: boolean;
  onClose: () => void;
};



const AppointmentModal: FC<AppointmentModalProps> = ({open, onClose}) => {
  return (
    <>
<Modal title="Appointment" onClose={onClose} open={open} />


</>
)
}

export default AppointmentModal