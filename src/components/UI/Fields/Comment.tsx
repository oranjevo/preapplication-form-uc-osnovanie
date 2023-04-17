import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const Comment = ({ control }: Props) => {
    return <FieldController name={'comment'} control={control} />
}

export default Comment