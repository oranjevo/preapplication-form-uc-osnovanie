import { Control, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { FormFields } from '@/types'
import { FieldPath } from 'react-hook-form/dist/types'

interface Props<T extends FormFields, TName extends FieldPath<T>> {
    control: Control<T>
    name: TName
}

const FieldController = <
    T extends FormFields = FormFields,
    TName extends FieldPath<T> = FieldPath<T>
>({
    name,
    control
}: Props<T, TName>) => {
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
