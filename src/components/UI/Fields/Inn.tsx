import { TextField } from 'components/UI/Control/TextField'
import { FIELDS } from 'constants/FIELDS'
import { PartyType } from 'types'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useFormState } from 'hooks/useFormState'

const Inn = () => {
    const {
        setValue,
        clearErrors,
        formState: { isDirty }
    } = useFormContext()
    const { partyType } = useFormState.useFields()
    const setFields = useFormState.useSetFields()

    const isCompany = +partyType === PartyType.company
    const mask = Array(isCompany ? 10 : 12).fill(/\d/)

    useEffect(() => {
        if (isDirty) {
            setValue('inn', '')
            setFields('', 'inn')
            clearErrors()
        }
    }, [partyType, setFields, setValue, clearErrors, isDirty])
    return (
        <TextField
            name={'inn'}
            type={'text'}
            mask={mask}
            fieldParams={isCompany ? FIELDS.INN_COMPANY : FIELDS.INN}
        />
    )
}

export { Inn }
