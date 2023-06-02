import { FC } from 'react'
import FormWrapper from './FormWrapper'

type UserData = {
    email: string
    password: string
  
}

type AccountFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const AccountForm: FC<AccountFormProps> = ({email, password, updateFields}) => {
    return(
        <FormWrapper title="Account">
            <label>Email</label>
            <input type="email" autoFocus required value={email} onChange={e => updateFields({email: e.target.value})}/>
            <label>Password</label>
            <input type="password" required value={password} onChange={e => updateFields({password: e.target.value})}/>
        </ FormWrapper>
      )
}

export default AccountForm