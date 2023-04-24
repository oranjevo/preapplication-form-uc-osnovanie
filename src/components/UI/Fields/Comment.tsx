import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}
const Comment = ({ control }: Props) => {
    return (
        <FieldController
            name={'comment'}
            type={'text'}
            control={control}
            fieldParams={FIELDS.COMMENT}
        />
    )
}

export default Comment
