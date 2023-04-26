import GridItem from 'components/UI/Grid/GridItem'
import MenuItemInner from 'components/UI/Control/Select/MenuItemInner'
import { useStyles } from 'components/UI/Control/Select/SelectStyled'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectProps, MenuItemProps } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FieldPath } from 'react-hook-form/dist/types'
import { FieldParams, FormFields, TMenuItem } from 'types'

interface Props<
    MenuItem extends TMenuItem,
    Fields extends FormFields,
    TName extends FieldPath<Fields>
> extends SelectProps {
    fieldParams: FieldParams
    menuItems: MenuItem[]
    control: Control<Fields>
    name: TName
    helperText?: string
    menuItemProps?: MenuItemProps
    gridProps?: Grid2Props
}

const SelectController = <
    MenuItem extends TMenuItem = TMenuItem,
    Fields extends FormFields = FormFields,
    TName extends FieldPath<Fields> = FieldPath<Fields>
>({
    name,
    control,
    fieldParams,
    menuItems,
    helperText,
    menuItemProps,
    gridProps,
    ...selectProps
}: Props<MenuItem, Fields, TName>) => {
    const { LABEL, PLACEHOLDER } = fieldParams
    const { classes } = useStyles()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, value, ...controlProps }, fieldState: { error } }) => (
                <GridItem sm={6} {...gridProps}>
                    <FormControl variant={'standard'} classes={classes} fullWidth>
                        <InputLabel error={!!error}>{LABEL}</InputLabel>
                        <Select
                            fullWidth
                            value={value || ''}
                            error={!!error}
                            placeholder={PLACEHOLDER}
                            inputRef={ref}
                            {...selectProps}
                            {...controlProps}
                        >
                            {menuItems.map((menuItem, index) => (
                                <MenuItem key={index} value={menuItem.value || menuItem?.id} {...menuItemProps}>
                                    <MenuItemInner item={menuItem} />
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText error={!!error}>
                            {error?.message ?? helperText}
                        </FormHelperText>
                    </FormControl>
                </GridItem>
            )}
        />
    )
}

export default SelectController
