import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const Inn = ({ control }: Props) => {
    return <FieldController name={'inn'} control={control} />
}

export default Inn