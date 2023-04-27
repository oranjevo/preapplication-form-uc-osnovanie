import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const Email = () => {
    return <Field name={'email'} type={'email'} fieldParams={FIELDS.EMAIL} />
}

export { Email }
