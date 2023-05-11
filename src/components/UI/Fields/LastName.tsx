import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'

const LastName = () => {
    return <TextField name={'lastname'} type={'text'} fieldParams={FIELDS.LASTNAME} />
}

export { LastName }
