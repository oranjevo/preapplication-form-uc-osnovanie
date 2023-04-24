import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}
const FirstName = ({ control }: Props) => {
    return (
        <FieldController
            name={'firstname'}
            type={'text'}
            control={control}
            fieldParams={FIELDS.FIRSTNAME}
        />
    )
}

export default FirstName
