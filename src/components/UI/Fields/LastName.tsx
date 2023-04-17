import FieldController from '@/components/UI/Control/FieldController'
import { ControllerProps } from 'react-hook-form'

interface Props extends Pick<ControllerProps, 'control'> {}

const LastName = ({ control }: Props) => {
    return <FieldController name={'lastname'} control={control} />
}

export default LastName