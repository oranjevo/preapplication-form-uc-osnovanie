import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const FirstName = () => {
    const { control } = useFormContext<FormFields>()
    return (
        <Field name={'firstname'} type={'text'} control={control} fieldParams={FIELDS.FIRSTNAME} />
    )
}

export { FirstName }
