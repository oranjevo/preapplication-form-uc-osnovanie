import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}
const LastName = ({ control }: Props) => {
    return (
        <FieldController
            name={'lastname'}
            type={'text'}
            control={control}
            fieldParams={FIELDS.LASTNAME}
        />
    )
}

export default LastName
