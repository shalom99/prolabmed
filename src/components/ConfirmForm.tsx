import { FC } from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
    firstName: string
    lastName: string
    age: string
    email: string
    date: string
    service: string
}

type ConfirmFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const ConfirmForm: FC<ConfirmFormProps> = ({firstName, lastName, age, email, date, service, updateFields}) => {
console.log(firstName, lastName, age, email, date, service )
  return(
    <FormWrapper title="Confirm Details">
      firstName: {firstName},
  lastName: {lastName},
  age: {age},
  email: {email},
  date: {date},
  service: {service},
    

    </FormWrapper>
  )
};

export default ConfirmForm;
