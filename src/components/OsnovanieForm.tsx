import FormContainer from '@/components/UI/FormContainer'
import HeaderText from '@/components/UI/HeaderText'
import SelectPartyType from '@/components/UI/Selects/SelectPartyType'
import { useForm } from 'react-hook-form'
import { Container } from '@mui/material'
import { FormFields } from '@/types'
import SelectRegion from '@/components/UI/Selects/SelectRegion'
import FirstName from '@/components/UI/Fields/FirstName'
import Email from '@/components/UI/Fields/Email'
import LastName from '@/components/UI/Fields/LastName'
import Phone from '@/components/UI/Fields/Phone'
import Inn from '@/components/UI/Fields/Inn'
import City from '@/components/UI/Fields/City'
import Comment from '@/components/UI/Fields/Comment'
import SelectProduct from '@/components/UI/Selects/SelectProduct'
import { yupResolver } from '@hookform/resolvers/yup'
import { osnovanieFormSchema } from '@/validation/schemas/OsnovanieForm.schema'
import SubmitBtn from '@/components/UI/SubmitBtn'

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
    const { control, handleSubmit } = useForm<FormFields>({
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
            <FormContainer sx={{ marginTop: 5 }} variant={'outlined'}>
                <SelectPartyType control={control} />
                <Phone control={control} />
                <FirstName control={control} />
                <Email control={control} />
                <LastName control={control} />
                <SelectRegion control={control} />
                <Inn control={control} />
                <City control={control} />
                <SelectProduct control={control} />
                <Comment control={control} />
                <SubmitBtn onClick={handleSubmit(submitHandler)} />
            </FormContainer>
        </Container>
    )
}

export default OsnovanieForm
