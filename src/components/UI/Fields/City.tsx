import FieldController from '@/components/UI/Control/FieldController'
import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}

const City = ({ control }: Props) => {
    return (
        <FieldController name={'city'} type={'text'} control={control} fieldParams={FIELDS.CITY} />
    )
}

export default City
