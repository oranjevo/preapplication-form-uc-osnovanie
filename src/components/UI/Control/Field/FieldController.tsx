import GridItem from 'components/UI/Grid/GridItem'
import { useStyles } from 'components/UI/Control/Field/FieldStyled'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { StandardTextFieldProps, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FormFields, FieldParams } from 'types'
import { FieldPath } from 'react-hook-form/dist/types'
import MaskedInput, { Mask } from 'react-text-mask'

interface Props<T extends FormFields, TName extends FieldPath<T>> extends StandardTextFieldProps {
    control: Control<T>
    fieldParams: FieldParams
    name: TName
    mask?: Mask
    helperText?: string
    gridProps?: Grid2Props
}

const FieldController = <
    T extends FormFields = FormFields,
    TName extends FieldPath<T> = FieldPath<T>
>({
    name,
    control,
    fieldParams,
    helperText,
    gridProps,
    mask,
    ...textFieldProps
}: Props<T, TName>) => {
    const { LABEL, PLACEHOLDER } = fieldParams
    const { classes } = useStyles()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, ...controlProps }, fieldState: { error } }) => (
                <GridItem sm={6} {...gridProps}>
                    <MaskedInput
                        mask={mask ?? false}
                        guide={true}
                        ref={ref}
                        {...controlProps}
                        render={(ref, maskedInputProps) => (
                            <TextField
                                fullWidth
                                classes={classes}
                                autoComplete={'off'}
                                variant={'standard'}
                                label={LABEL}
                                placeholder={PLACEHOLDER}
                                error={!!error}
                                inputRef={ref}
                                helperText={error?.message ?? helperText}
                                {...maskedInputProps}
                                {...textFieldProps}
                            />
                        )}
                    />
                </GridItem>
            )}
        />
    )
}

export default FieldController
