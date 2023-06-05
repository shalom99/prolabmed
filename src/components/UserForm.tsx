import { FC } from "react";
import FormWrapper from "./FormWrapper";
import Input from "./inputs/Input";

type UserData = {
    firstName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const UserForm: FC<UserFormProps> = ({firstName, lastName, age, updateFields}) => {

  return(
    <FormWrapper title="Patient Details">
        <label className="text-accent">First Name</label>
        <input className="border-b-2 border-accent mb-5" placeholder="First Name" type="text" autoFocus required value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
        <Input
        id="last name"
        label="Last Name"
        required
      />

        
        <Input
        id="email"
        label="Email"
        required
      />

    </FormWrapper>
  )
};

export default UserForm;
