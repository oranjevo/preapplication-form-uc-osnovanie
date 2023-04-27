import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const Inn = () => {
    return <Field name={'inn'} type={'text'} fieldParams={FIELDS.INN} />
}

export { Inn }
