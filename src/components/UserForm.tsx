import { FC } from "react";
import FormWrapper from "./FormWrapper";
import Input from "./inputs/Input";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm: FC<UserFormProps> = ({
  firstName,
  lastName,
  email,
  updateFields,
}) => {
  return (
    <>
    <h2 className="text-center mb-5">Patient Details</h2>
    <div className='grid lg:grid-cols-1 gap-5'>
      <Input
        id="firstName"
        label="First Name"
        required
        type="text"
        autoFocus
        autoComplete="off"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <Input
        id="lastName"
        label="Last Name"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <Input
        id="firstName"
        label="Email"
        required
        type="email"
        autoComplete="off"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      </div>
</>
  );
};

export default UserForm;
