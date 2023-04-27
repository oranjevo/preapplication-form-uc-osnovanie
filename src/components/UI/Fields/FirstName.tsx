import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const FirstName = () => {
    return (
        <Field name={'firstname'} type={'text'} fieldParams={FIELDS.FIRSTNAME} />
    )
}

export { FirstName }
