import { Control } from 'react-hook-form'
import { FormFields } from '@/types'
import { FIELDS } from '@/constants/FIELDS'
import FieldController from '@/components/UI/Control/FieldController'

interface Props {
    control: Control<FormFields>
}

const Phone = ({ control }: Props) => {
    const mask = ['+','7',' ','(',/[1-9]/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,' ',/\d/,/\d/,' ',/\d/,/\d/]
    return (
        <FieldController
            name={'phone'}
            type={'tel'}
            mask={mask}
            control={control}
            fieldParams={FIELDS.PHONE}
        />
    )
}

export default Phone
