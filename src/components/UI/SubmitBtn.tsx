import { Button, ButtonProps } from '@mui/material'
import GridItem from '@/components/UI/Grid/GridItem'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    btn: {
        height: '50px',
        width: '280px',
        textTransform: 'none',
        marginTop: theme.spacing(2)
    },
    grid: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

interface Props extends ButtonProps {}

const SubmitBtn = ({ ...btnProps }: Props) => {
    const { classes } = useStyles()
    return (
        <GridItem className={classes.grid} sm={12}>
            <Button className={classes.btn} type={'submit'} variant={'contained'} {...btnProps}>
                Отправить заявку
            </Button>
        </GridItem>
    )
}

export default SubmitBtn
