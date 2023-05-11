import { useStyles } from './AutocompleteStyled'
import { GridItem } from 'components/UI/Grid'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { Autocomplete, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldPath } from 'react-hook-form/dist/types'
import { useFormState } from 'hooks/useFormState'
import { CustomAutocompleteProps, IFieldParams, IFormFields, IAutocompleteOption } from 'types'

interface Props<T, Fields extends IFormFields> extends CustomAutocompleteProps<T> {
    fieldParams: IFieldParams
    name: FieldPath<Fields>
    helperText?: string
    gridProps?: Grid2Props
}

const AutocompleteController = <
    T extends IAutocompleteOption,
    Fields extends IFormFields = IFormFields
>({
    name,
    fieldParams,
    helperText,
    gridProps,
    ...autocompleteProps
}: Props<T, Fields>) => {
    const setFields = useFormState.useSetFields()
    const { LABEL, PLACEHOLDER } = fieldParams
    const { control } = useFormContext<IFormFields>()
    const { classes } = useStyles()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, onChange, ...controlProps }, fieldState: { error } }) => (
                <GridItem sm={6} {...gridProps}>
                    <Autocomplete
                        {...controlProps}
                        {...autocompleteProps}
                        fullWidth
                        classes={classes}
                        autoComplete={false}
                        noOptionsText={'Нет совпадений'}
                        onChange={(_, newValue) => {
                            onChange(newValue)
                            if (newValue) setFields(newValue.value, name)
                        }}
                        onInputChange={(_, newValue, changeReason) => {
                            if (changeReason !== 'reset' && !newValue.length) setFields(null, name)
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant={'standard'}
                                label={LABEL}
                                error={!!error}
                                inputRef={ref}
                                helperText={error?.message ?? helperText}
                                placeholder={PLACEHOLDER}
                            />
                        )}
                    />
                </GridItem>
            )}
        />
    )
}

export { AutocompleteController }
