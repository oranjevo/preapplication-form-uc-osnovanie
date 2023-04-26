import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const Inn = () => {
    const { control } = useFormContext<FormFields>()

    return <Field name={'inn'} type={'text'} control={control} fieldParams={FIELDS.INN} />
}

export default Inn
