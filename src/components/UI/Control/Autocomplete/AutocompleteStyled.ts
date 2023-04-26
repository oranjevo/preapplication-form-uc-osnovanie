import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
    paper: {
        fontSize: '14px'
    },
    inputRoot: {
        paddingLeft: theme.spacing(2),
        fontSize: '14px'
    },
    root: {
        '& .MuiInputLabel-root': {
            paddingLeft: theme.spacing(1)
        }
    }
}))
