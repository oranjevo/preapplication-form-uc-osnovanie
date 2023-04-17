import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const City = ({ control }: Props) => {
    return <FieldController name={'city'} control={control} />
}

export default City