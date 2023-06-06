import { FC } from "react";

import Input from "./inputs/Input";

type UserData = {
    date: string
    service: string
    request: string
}

type ServicesFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const ServicesForm: FC<ServicesFormProps> = ({date, service,request, updateFields}) => {

  return(
    <>
    <h2 className="text-center mb-5">What do you need?</h2>
    <div className='grid lg:grid-cols-1 gap-5'>
      <Input
        id="date"
        label="Date"
        required
        type="text"
        autoFocus
        value={date}
        autoComplete="off"
        onChange={(e) => updateFields({ date: e.target.value })}
      />

      <Input
        id="service"
        label="Service"
        required
        type="text"
        value={service}
        autoComplete="off"
        onChange={(e) => updateFields({ service: e.target.value })}
      />

      <Input
        id="service"
        label="Additional Request"
        type="text"
        value={request}
        autoComplete="off"
        onChange={(e) => updateFields({ request: e.target.value })}
      />
      </div>
    </>
  )
};

export default ServicesForm;
