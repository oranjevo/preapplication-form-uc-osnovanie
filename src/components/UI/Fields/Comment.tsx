import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const Comment = () => {
    const { control } = useFormContext<FormFields>()

    return <Field name={'comment'} type={'text'} control={control} fieldParams={FIELDS.COMMENT} />
}

export default Comment
