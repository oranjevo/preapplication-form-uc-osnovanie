import { useStyles } from './AutocompleteStyled'
import { GridItem } from 'components/UI/Grid'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { Autocomplete, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FieldPath } from 'react-hook-form/dist/types'
import { CustomAutocompleteProps, FieldParams, FormFields } from 'types'

interface Props<T, Fields extends FormFields> extends CustomAutocompleteProps<T> {
    fieldParams: FieldParams
    control: Control<Fields>
    name: FieldPath<Fields>
    helperText?: string
    gridProps?: Grid2Props
}

const AutocompleteController = <T, Fields extends FormFields = FormFields>({
    name,
    control,
    fieldParams,
    helperText,
    gridProps,
    ...autocompleteProps
}: Props<T, Fields>) => {
    const { LABEL, PLACEHOLDER } = fieldParams
    const { classes } = useStyles()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, ...controlProps }, fieldState: { error } }) => (
                <GridItem sm={6} {...gridProps}>
                    <Autocomplete
                        fullWidth
                        classes={classes}
                        autoComplete={false}
                        noOptionsText={'Нет совпадений'}
                        inputValue={value || ''}
                        onInputChange={(_, value) => onChange(value)}
                        renderInput={(params) => (
                            <TextField
                                variant={'standard'}
                                label={LABEL}
                                error={!!error}
                                helperText={error?.message ?? helperText}
                                placeholder={PLACEHOLDER}
                                {...params}
                            />
                        )}
                        {...autocompleteProps}
                        {...controlProps}
                    />
                </GridItem>
            )}
        />
    )
}

export { AutocompleteController }
