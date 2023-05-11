import { Button, ButtonProps } from '@mui/material'
import { useStyles } from './BtnStyled'

interface Props extends ButtonProps {
    name: string
}

const Btn = ({ name, ...btnProps }: Props) => {
    const { classes } = useStyles()
    return (
        <Button classes={classes} variant={'contained'} {...btnProps}>
            {name}
        </Button>
    )
}

export { Btn as Button }
