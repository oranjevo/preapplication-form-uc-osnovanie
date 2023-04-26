import FormContainer from 'components/UI/FormContainer'
import HeaderText from 'components/UI/HeaderText'
import SelectPartyType from 'components/UI/Selects/SelectPartyType'
import SelectRegion from 'components/UI/Selects/SelectRegion'
import FirstName from 'components/UI/Fields/FirstName'
import Email from 'components/UI/Fields/Email'
import LastName from 'components/UI/Fields/LastName'
import Phone from 'components/UI/Fields/Phone'
import Inn from 'components/UI/Fields/Inn'
import City from 'components/UI/Fields/City'
import Comment from 'components/UI/Fields/Comment'
import SelectProduct from 'components/UI/Selects/SelectProduct'
import SubmitBtn from 'components/UI/SubmitBtn'
import { Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import { osnovanieFormSchema } from 'validation/schemas/OsnovanieForm.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormFields } from 'types'

const defaultValues: FormFields = {
    partyType: '',
    firstname: '',
    lastname: '',
    inn: '',
    phone: '',
    email: '',
    region: '',
    city: '',
    product: '',
    comment: ''
}

const OsnovanieForm = () => {
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

export default OsnovanieForm
