import PriceHolder from 'components/UI/PriceHolder'
import { Typography, TypographyProps } from '@mui/material'
import { TMenuItem } from 'types'

interface Props<T extends TMenuItem> extends TypographyProps {
    item: T
}

const MenuItemInner = <T extends TMenuItem>({ item, ...typographyProps }: Props<T>) => {
    return (
        <>
            <Typography fontSize={'14px'} {...typographyProps}>
                {item.text}
            </Typography>
            {item.price && <PriceHolder price={item.price} />}
        </>
    )
}

export default MenuItemInner
