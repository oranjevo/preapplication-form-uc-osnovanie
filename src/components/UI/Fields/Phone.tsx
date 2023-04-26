import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const Phone = () => {
    const { control } = useFormContext<FormFields>()
    const mask = [
        '+',
        '7',
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/
    ]
    return (
        <Field
            name={'phone'}
            type={'tel'}
            mask={mask}
            control={control}
            fieldParams={FIELDS.PHONE}
        />
    )
}

export default Phone
