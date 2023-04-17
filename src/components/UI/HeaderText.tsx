import { Typography, TypographyProps } from '@mui/material'

interface Props extends TypographyProps {
    children: string
}

const HeaderText = ({ children, ...props }: Props) => {
    return (
        <Typography variant={'h2'} fontWeight={500} fontSize={26} textAlign={'center'} {...props}>
            {children}
        </Typography>
    )
}

export default HeaderText
