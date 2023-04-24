import { Control, Controller } from 'react-hook-form'
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    MenuItemProps,
    Select,
    SelectProps,
    Typography
} from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { FieldPath } from 'react-hook-form/dist/types'
import { FormFields, FieldParams, TMenuItem } from '@/types'
import PriceHolder from '@/components/UI/PriceHolder'
import { Grid2Props } from '@mui/material/Unstable_Grid2'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    label: { paddingLeft: theme.spacing(1), fontSize: '14px' },
    select: { paddingLeft: theme.spacing(2), fontSize: '14px' },
    menuItem: { position: 'relative', fontSize: '14px' }
}))

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
            render={({
                field: { ref, value, ...controlProps },
                fieldState: { error, invalid }
            }) => (
                <GridItem sm={6} {...gridProps}>
                    <FormControl variant={'standard'} fullWidth>
                        <InputLabel
                            id={`select-${name}-id`}
                            error={invalid}
                            className={classes.label}
                        >
                            {LABEL}
                        </InputLabel>
                        <Select
                            fullWidth
                            className={classes.select}
                            value={value || ''}
                            labelId={`select-${name}-id`}
                            id={`select-${name}-id`}
                            error={invalid}
                            placeholder={PLACEHOLDER}
                            inputRef={ref}
                            {...selectProps}
                            {...controlProps}
                        >
                            {menuItems.map((menuItem: MenuItem, index: number) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        className={classes.menuItem}
                                        value={menuItem.value || menuItem?.id}
                                        {...menuItemProps}
                                    >
                                        <Typography fontSize={'14px'}>{menuItem.text}</Typography>
                                        {menuItem.price && <PriceHolder price={menuItem.price} />}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                        <FormHelperText error={invalid}>
                            {invalid ? error?.message : helperText}
                        </FormHelperText>
                    </FormControl>
                </GridItem>
            )}
        />
    )
}

export default SelectController
