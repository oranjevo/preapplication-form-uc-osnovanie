import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps {
    price: number
}

const PriceHolder = ({ price, ...boxProps }: Props) => {
    const formatPrice = price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
    return (
        <Box
            component={'span'}
            fontWeight={'700'}
            color={'#37474f'}
            position={'absolute'}
            right={'25px'}
            top={5}
            fontSize={'14px'}
            {...boxProps}
        >
            {formatPrice}
        </Box>
    )
}

export default PriceHolder
