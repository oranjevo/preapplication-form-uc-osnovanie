import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const Comment = () => {
    return <Field name={'comment'} type={'text'} fieldParams={FIELDS.COMMENT} />
}

export { Comment }
