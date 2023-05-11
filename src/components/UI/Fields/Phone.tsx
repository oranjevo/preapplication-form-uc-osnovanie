import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'
import { FocusEventHandler } from 'react'
import { useFormContext } from 'react-hook-form'
import { IFormFields } from 'types'
import { useFormState } from 'hooks/useFormState'

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
    const isEmptyField = useFormState.useIsEmptyField()
    const { setValue } = useFormContext<IFormFields>()
    const onFocus: FocusEventHandler<HTMLInputElement> = () => {
        if (isEmptyField('phone')) {
            setValue('phone', '+7 (')
        }
    }
    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
        if (isEmptyField('phone')) {
            setValue('phone', '')
        }
    }
    return (
        <TextField
            name={'phone'}
            type={'tel'}
            mask={mask}
            onFocus={onFocus}
            onBlur={onBlur}
            fieldParams={FIELDS.PHONE}
        />
    )
}

export { Phone }
