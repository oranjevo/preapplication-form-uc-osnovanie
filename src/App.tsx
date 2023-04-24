import './index.sass'
import OsnovanieForm from '@/components/OsnovanieForm'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#15203a'
        }
    },
    typography: {
        fontFamily: 'Verdana'
    },
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: { position: 'absolute', bottom: '-1.5rem', left: '5px' }
            }
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <OsnovanieForm />
        </ThemeProvider>
    )
}

export default App
