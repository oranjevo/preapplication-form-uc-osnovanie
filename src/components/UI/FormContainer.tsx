import { GridContainer } from 'components/UI/Grid'
import { FormControl, FormControlProps } from '@mui/material'
import { ReactNode } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'
import { FormFields } from 'types'

interface Props extends FormControlProps {
    reactHookFormMethods: UseFormReturn<FormFields>
    children: ReactNode | ReactNode[]
}

const FormContainer = ({ reactHookFormMethods, children, ...formControlProps }: Props) => {
    return (
        <FormProvider {...reactHookFormMethods}>
            <FormControl {...formControlProps} fullWidth>
                <GridContainer spacing={5} width={'md'}>
                    {children}
                </GridContainer>
            </FormControl>
        </FormProvider>
    )
}

export { FormContainer }
