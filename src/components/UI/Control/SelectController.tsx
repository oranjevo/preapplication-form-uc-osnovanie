import { Control, Controller } from 'react-hook-form'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { FieldPath } from 'react-hook-form/dist/types'
import { FormFields } from '@/types'

type TMenuItem = {
    value: string
    text: string
}
interface Props<MenuItem extends TMenuItem, T extends FormFields, TName extends FieldPath<T>> {
    label: string
    menuItems: MenuItem[]
    control: Control<T>
    name: TName
}

const SelectController = <
    MenuItem extends TMenuItem = TMenuItem,
    T extends FormFields = FormFields,
    TName extends FieldPath<T> = FieldPath<T>
>({
    name,
    control,
    label,
    menuItems
}: Props<MenuItem, T, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, value, ...fieldProps } }) => (
                <GridItem md={6}>
                    <FormControl variant={'standard'} fullWidth>
                        <InputLabel id={`select-${name}-id`}>{label}</InputLabel>
                        <Select
                            labelId={`select-${name}-id`}
                            id={`select-${name}-id`}
                            autoWidth
                            label={label}
                            inputRef={ref}
                            value={value || ''}
                            {...fieldProps}
                        >
                            {menuItems.map((menuItem: MenuItem, index: number) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        value={menuItem.value}
                                        sx={{ minWidth: '406px' }}
                                    >
                                        {menuItem.text}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </GridItem>
            )}
        />
    )
}

export default SelectController
