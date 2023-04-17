import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}
const Comment = ({ control }: Props) => {
    return <FieldController name={'comment'} control={control} />
}

export default Comment
