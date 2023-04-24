import { FormControl, FormControlProps } from '@mui/material'
import { ReactNode } from 'react'
import GridContainer from '@/components/UI/Grid/GridContainer'

interface Props extends FormControlProps {
    children: ReactNode
}

const FormContainer = ({ children, ...formControlProps }: Props) => {
    return (
        <FormControl {...formControlProps} fullWidth>
            <GridContainer spacing={5} width={'md'}>
                {children}
            </GridContainer>
        </FormControl>
    )
}

export default FormContainer
