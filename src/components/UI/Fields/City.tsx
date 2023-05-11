import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'

const City = () => {
    return <TextField name={'city'} type={'text'} fieldParams={FIELDS.CITY} />
}

export { City }
