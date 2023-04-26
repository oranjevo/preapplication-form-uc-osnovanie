import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const City = () => {
    const { control } = useFormContext<FormFields>()

    return <Field name={'city'} type={'text'} control={control} fieldParams={FIELDS.CITY} />
}

export default City
