import { Control, Controller } from 'react-hook-form'
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { FormFields } from '@/types'
import { FieldPath } from 'react-hook-form/dist/types'

interface Props<T, F extends FormFields>
    extends Omit<
        AutocompleteProps<T, boolean | undefined, boolean | undefined, false>,
        'renderInput'
    > {
    label: string
    control: Control<F>
    name: FieldPath<F>
}

const AutocompleteController = <T, F extends FormFields = FormFields>({
    name,
    control,
    label,
    ...props
}: Props<T, F>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: {value, onChange, ...fieldProps}}) => (
                <GridItem md={6}>
                    <Autocomplete
                        {...fieldProps}
                        {...props}
                        noOptionsText={'Нет совпадений'}
                        fullWidth
                        inputValue={value || ''}
                        onInputChange={(_, value) => onChange(value)}
                        renderInput={(params) => (
                            <TextField
                                variant={'standard'}
                                label={label}
                                {...params}
                            />
                        )}
                    />
                </GridItem>
            )}
        />
    )
}

export default AutocompleteController
