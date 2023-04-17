import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}
const LastName = ({ control }: Props) => {
    return <FieldController name={'lastname'} control={control} />
}

export default LastName
