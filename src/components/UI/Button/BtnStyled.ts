import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
    root: {
        height: '50px',
        width: '280px',
        textTransform: 'none',
        margin: '0 auto',
        marginTop: theme.spacing(3)
    }
}))
