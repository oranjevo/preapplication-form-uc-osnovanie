import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
    root: {
        '& label': {
            paddingLeft: theme.spacing(1),
            fontSize: '14px'
        },
        '& input, & .MuiSelect-select ': {
            paddingLeft: theme.spacing(2),
            fontSize: '14px',
            height: '10px !important'
        }
    }
}))
