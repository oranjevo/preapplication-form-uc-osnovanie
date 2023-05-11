import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'

const Comment = () => {
    return <TextField name={'comment'} type={'text'} fieldParams={FIELDS.COMMENT} />
}

export { Comment }
