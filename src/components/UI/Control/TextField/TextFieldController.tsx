import { useStyles } from './TextFieldStyled'
import { GridItem } from 'components/UI/Grid'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { StandardTextFieldProps, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { IFormFields, IFieldParams } from 'types'
import { FieldPath } from 'react-hook-form/dist/types'
import MaskedInput, { Mask } from 'react-text-mask'
import { useFormState } from 'hooks/useFormState'

interface Props<T extends IFormFields, TName extends FieldPath<T>> extends StandardTextFieldProps {
    fieldParams: IFieldParams
    name: TName
    mask?: Mask
    helperText?: string
    gridProps?: Grid2Props
}

const TextFieldController = <
    T extends IFormFields = IFormFields,
    TName extends FieldPath<T> = FieldPath<T>
>({
    name,
    fieldParams,
    helperText,
    gridProps,
    mask,
    ...textFieldProps
}: Props<T, TName>) => {
    const setFields = useFormState.useSetFields()
    const { LABEL, PLACEHOLDER } = fieldParams
    const { control } = useFormContext<IFormFields>()
    const { classes } = useStyles()
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { ref: renderRef, value, onChange, ...controlProps },
                fieldState: { error }
            }) => (
                <GridItem sm={6} {...gridProps}>
                    <MaskedInput
                        mask={mask ?? false}
                        guide={false}
                        onChange={(event) => {
                            const { value } = event.target
                            onChange(event)
                            setFields(value, name)
                        }}
                        {...controlProps}
                        render={(textMaskRef, maskedInputProps) => (
                            <TextField
                                {...maskedInputProps}
                                {...textFieldProps}
                                fullWidth
                                classes={classes}
                                autoComplete={'off'}
                                variant={'standard'}
                                value={value}
                                label={LABEL}
                                placeholder={PLACEHOLDER}
                                error={!!error}
                                inputRef={(node) => {
                                    renderRef(node)
                                    textMaskRef(node)
                                }}
                                helperText={error?.message ?? helperText}
                            />
                        )}
                    />
                </GridItem>
            )}
        />
    )
}

export { TextFieldController }
