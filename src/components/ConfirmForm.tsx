import { FC } from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
    firstName: string
    lastName: string
    email: string
    date: string
    service: string
    request: string
}

type ConfirmFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const ConfirmForm: FC<ConfirmFormProps> = ({firstName, lastName, email, date, service, request, updateFields}) => {

  return(
    <>
    <h2 className="text-center mb-5">Confirm appointment details</h2>
    <div className='grid lg:grid-cols-2 gap-5 pl-10'>
      <p>First Name: <span className="font-bold">{firstName}</span></p>
      <p>Last Name: <span className="font-bold">{lastName}</span></p>
      <p>Email: <span className="font-bold">{email}</span></p>
      <p>Appointment Date: <span className="font-bold">{date}</span></p>
      <p>Service selected: <span className="font-bold">{service}</span></p>
      {request && <p className="col-span-2"> Request: <span className="font-bold">{request}</span></p>}
    </div>
  </>
  )
};

export default ConfirmForm;
