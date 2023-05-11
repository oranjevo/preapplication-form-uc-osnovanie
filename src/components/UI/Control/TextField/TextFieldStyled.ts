import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
    root: {
        '& .MuiInputLabel-root': {
            paddingLeft: theme.spacing(1),
            fontSize: '14px'
        },
        input: {
            paddingLeft: theme.spacing(2),
            fontSize: '14px'
        }
    }
}))
