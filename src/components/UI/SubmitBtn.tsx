import GridItem from 'components/UI/Grid/GridItem'
import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useFormContext } from 'react-hook-form'
import { FormFields } from 'types'

const useStyles = makeStyles()((theme) => ({
    root: {
        height: '50px',
        width: '280px',
        textTransform: 'none',
        marginTop: theme.spacing(2)
    }
}))

interface Props extends ButtonProps {
    submitHandler: () => void
}

const SubmitBtn = ({ submitHandler, ...btnProps }: Props) => {
    const { handleSubmit } = useFormContext<FormFields>()
    const { classes } = useStyles()
    return (
        <GridItem display={'flex'} justifyContent={'center'} sm={12}>
            <Button
                classes={classes}
                type={'submit'}
                variant={'contained'}
                onClick={handleSubmit(submitHandler)}
                {...btnProps}
            >
                Отправить заявку
            </Button>
        </GridItem>
    )
}

export default SubmitBtn
