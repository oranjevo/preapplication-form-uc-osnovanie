import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}
const Phone = ({ control }: Props) => {
    return <FieldController name={'phone'} control={control} />
}

export default Phone
