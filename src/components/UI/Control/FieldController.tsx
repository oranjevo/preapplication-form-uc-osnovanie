import { Control, Controller } from 'react-hook-form'
import { StandardTextFieldProps, TextField } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { FormFields, FieldParams } from '@/types'
import { FieldPath } from 'react-hook-form/dist/types'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { makeStyles } from 'tss-react/mui'
import MaskedInput, { Mask } from 'react-text-mask'

const useStyles = makeStyles()((theme) => ({
    root: {
        '& label': {
            paddingLeft: theme.spacing(1),
            fontSize: '14px'
        },
        '& input': {
            paddingLeft: theme.spacing(2),
            fontSize: '14px'
        }
    }
}))

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
            render={({ field: { ref, ...controlProps }, fieldState: { invalid, error } }) => (
                <GridItem sm={6} {...gridProps}>
                    <MaskedInput
                        mask={mask ?? false}
                        guide={true}
                        ref={ref}
                        {...controlProps}
                        render={(ref, maskedInputProps) => (
                            <TextField
                                fullWidth
                                className={classes.root}
                                autoComplete={'off'}
                                variant={'standard'}
                                label={LABEL}
                                placeholder={PLACEHOLDER}
                                error={invalid}
                                inputRef={ref}
                                helperText={invalid ? error?.message : helperText}
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
