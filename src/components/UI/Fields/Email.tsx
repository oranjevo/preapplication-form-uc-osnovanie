import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'

const Email = () => {
    return <TextField name={'email'} type={'email'} fieldParams={FIELDS.EMAIL} />
}

export { Email }
