import { Typography, TypographyProps } from '@mui/material'

interface Props extends TypographyProps {
    children: string
}

const HeaderText = ({ children, ...typographyProps }: Props) => {
    return (
        <Typography
            variant={'h2'}
            fontWeight={500}
            fontSize={24}
            textAlign={'center'}
            {...typographyProps}
        >
            {children}
        </Typography>
    )
}

export { HeaderText }
