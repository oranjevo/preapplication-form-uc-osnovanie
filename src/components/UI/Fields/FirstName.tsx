import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'

const FirstName = () => {
    return <TextField name={'firstname'} type={'text'} fieldParams={FIELDS.FIRSTNAME} />
}

export { FirstName }
