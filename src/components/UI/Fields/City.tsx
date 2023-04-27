import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const City = () => {
    return <Field name={'city'} type={'text'} fieldParams={FIELDS.CITY} />
}

export { City }
