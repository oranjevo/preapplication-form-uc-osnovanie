import { FormControl, FormControlProps } from '@mui/material'
import { ReactNode } from 'react'
import GridContainer from '@/components/UI/Grid/GridContainer'

interface Props extends FormControlProps {
    children: ReactNode
}

const FormContainer = ({ children, ...props }: Props) => {
    return (
        <FormControl {...props} fullWidth>
            <GridContainer spacing={5} maxWidth={'md'}>
                {children}
            </GridContainer>
        </FormControl>
    )
}

export default FormContainer
