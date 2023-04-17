import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const Phone = ({ control }: Props) => {
    return <FieldController name={'phone'} control={control} />
}

export default Phone