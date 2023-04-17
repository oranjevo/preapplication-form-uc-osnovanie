import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}
const Email = ({ control }: Props) => {
    return <FieldController name={'firstname'} control={control} />
}

export default Email
