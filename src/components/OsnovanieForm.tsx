import { Phone, Inn, LastName, FirstName, Email, Comment, City } from 'components/UI/Fields'
import { SelectProduct, SelectPartyType, SelectRegion } from 'components/UI/Selects'
import { SubmitBtn, HeaderText, FormContainer } from 'components/UI'
import { Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import { osnovanieFormSchema } from 'validation/schemas/OsnovanieForm.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormFields } from 'types'
import { useFormState } from 'store/useFormState'

const OsnovanieForm = () => {
    const defaultValues = useFormState((state) => state.formFields)
    const methods = useForm<FormFields>({
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
        defaultValues: defaultValues,
        resolver: yupResolver(osnovanieFormSchema),
        shouldFocusError: false
    })

    const submitHandler = () => {}

    return (
        <Container
            maxWidth={'md'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <HeaderText maxWidth={400} mt={5}>
                Оформите заявку на получение электронной подписи
            </HeaderText>
            <FormContainer
                reactHookFormMethods={methods}
                sx={{ marginTop: 5 }}
                variant={'outlined'}
            >
                <SelectPartyType />
                <Phone />
                <FirstName />
                <Email />
                <LastName />
                <SelectRegion />
                <Inn />
                <City />
                <SelectProduct />
                <Comment />
                <SubmitBtn submitHandler={submitHandler} />
            </FormContainer>
        </Container>
    )
}

export { OsnovanieForm }
