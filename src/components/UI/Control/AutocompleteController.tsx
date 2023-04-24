import { Control, Controller } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { CustomAutocompleteProps, FormFields, FieldParams } from '@/types'
import { FieldPath } from 'react-hook-form/dist/types'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    root: {
        '& label': {
            paddingLeft: theme.spacing(1),
            fontSize: '15px'
        },
        '& input': {
            paddingLeft: `${theme.spacing(2)} !important`,
            fontSize: '14px'
        }
    }
}))

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
            render={({
                field: { value, onChange, ...controlProps },
                fieldState: { error, invalid }
            }) => (
                <GridItem sm={6} {...gridProps}>
                    <Autocomplete
                        fullWidth
                        className={classes.root}
                        autoComplete={false}
                        noOptionsText={'Нет совпадений'}
                        inputValue={value || ''}
                        onInputChange={(_, value) => onChange(value)}
                        renderInput={(params) => (
                            <TextField
                                variant={'standard'}
                                label={LABEL}
                                error={invalid}
                                helperText={invalid ? error?.message : helperText}
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

export default AutocompleteController
