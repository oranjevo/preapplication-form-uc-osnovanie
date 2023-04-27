import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const LastName = () => {
    return <Field name={'lastname'} type={'text'} fieldParams={FIELDS.LASTNAME} />
}

export { LastName }
