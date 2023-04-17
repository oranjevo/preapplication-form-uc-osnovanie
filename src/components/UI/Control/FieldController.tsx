import { Controller, ControllerProps } from 'react-hook-form'
import { TextField } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'


interface Props extends ControllerProps {

}

const FieldController = ({ name, control }: Props) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, ...fieldProps } }) => (
                <GridItem md={6}>
                    <TextField inputRef={ref} {...fieldProps} />
                </GridItem>
            )}
        />
    )
}

export default FieldController
