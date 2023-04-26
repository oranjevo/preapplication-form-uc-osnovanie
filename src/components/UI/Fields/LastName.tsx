import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const LastName = () => {
    const { control } = useFormContext<FormFields>()

    return <Field name={'lastname'} type={'text'} control={control} fieldParams={FIELDS.LASTNAME} />
}

export default LastName
