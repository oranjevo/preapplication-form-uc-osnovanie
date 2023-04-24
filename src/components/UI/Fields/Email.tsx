import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}
const Email = ({ control }: Props) => {
    return (
        <FieldController
            name={'email'}
            type={'email'}
            control={control}
            fieldParams={FIELDS.EMAIL}
        />
    )
}

export default Email
