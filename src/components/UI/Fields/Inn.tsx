import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}

const Inn = ({ control }: Props) => {
    return <FieldController name={'inn'} type={'text'} control={control} fieldParams={FIELDS.INN} />
}

export default Inn
