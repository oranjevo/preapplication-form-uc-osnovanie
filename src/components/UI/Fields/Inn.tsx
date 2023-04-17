import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}

const Inn = ({ control }: Props) => {
    return <FieldController name={'inn'} control={control} />
}

export default Inn
