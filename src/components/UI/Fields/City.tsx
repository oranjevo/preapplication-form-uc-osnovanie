import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'

interface Props {
    control: Control<FormFields>
}

const City = ({ control }: Props) => {
    return <FieldController name={'city'} control={control} />
}

export default City
