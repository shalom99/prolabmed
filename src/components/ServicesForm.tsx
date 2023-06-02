import { FC } from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
    date: string
    service: string
}

type ServicesFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const ServicesForm: FC<ServicesFormProps> = ({date, service, updateFields}) => {

  return(
    <FormWrapper title="User Details">
        <label>Select date</label>
        <input type="text" autoFocus required value={date} onChange={e => updateFields({date: e.target.value})}/>
        <label>Select service</label>
        <input type="text" required value={service} onChange={e => updateFields({service: e.target.value})} />
    </FormWrapper>
  )
};

export default ServicesForm;
