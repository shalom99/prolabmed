import { FC } from 'react'

import Modal from './Modal'
import StepperModal from './StepperModal';

type AppointmentModalProps = {
  open: boolean;
  onClose: () => void;
};

const AppointmentModal: FC<AppointmentModalProps> = ({open, onClose}) => {
  return (
    <>
<Modal title="Appointment" onClose={onClose} open={open}>
 <StepperModal />
  </Modal>
</>
)
}

export default AppointmentModal