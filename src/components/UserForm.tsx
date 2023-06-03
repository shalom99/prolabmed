import { FC } from "react";
import FormWrapper from "./FormWrapper";

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
        <input className="border-b-2 border-accent mb-5 focus:outline-none" placeholder="First Name" type="text" autoFocus required value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
        <label className="text-accent">Last Name</label>
        <input type="text" className="border-b-2 border-accent mb-5" placeholder="Last Name" required value={lastName} onChange={e => updateFields({lastName: e.target.value})} />
        <label className="text-accent">Age</label>
        <input className="border-b-2 border-accent" type="number" placeholder="Age" min={1} required value={age} onChange={e => updateFields({age: e.target.value})}/>

    </FormWrapper>
  )
};

export default UserForm;
