import { FC } from 'react'
import FormWrapper from './FormWrapper'

type UserData = {
    street: string
    city: string
    state: string
    zip: string
}

type AddressFormProps = UserData & {
 updateFields: (fields: Partial<UserData>) => void
}

const AddressForm: FC<AddressFormProps> = ({street, city, state, zip, updateFields}) => {
    return(
        <FormWrapper title="Address">
            <label>Street</label>
            <input type="text" autoFocus required value={street} onChange={e => updateFields({street: e.target.value})} />
            <label>City</label>
            <input type="text" required value={city} onChange={e => updateFields({city: e.target.value})} />
            <label>State</label>
            <input type="text" required value={state} onChange={e => updateFields({state: e.target.value})} />
            <label>Zip</label>
            <input type="text" required value={zip} onChange={e => updateFields({zip: e.target.value})} />
        </ FormWrapper>
      )
}

export default AddressForm