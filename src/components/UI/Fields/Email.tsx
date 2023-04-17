import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const Email = ({ control }: Props) => {
    return <FieldController name={'firstname'} control={control} />
}

export default Email