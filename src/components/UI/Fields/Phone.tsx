import { Field } from 'components/UI/Control/Field'
import { FIELDS } from 'constants/FIELDS'

const Phone = () => {
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
            fieldParams={FIELDS.PHONE}
        />
    )
}

export { Phone }
