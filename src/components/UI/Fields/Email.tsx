import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const Email = () => {
    const { control } = useFormContext<FormFields>()

    return <Field name={'email'} type={'email'} control={control} fieldParams={FIELDS.EMAIL} />
}

export default Email
