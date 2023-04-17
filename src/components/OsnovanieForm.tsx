import FormContainer from '@/components/UI/FormContainer'
import HeaderText from '@/components/UI/HeaderText'
import SelectPartyType from '@/components/UI/Selects/SelectPartyType'
import { useForm } from 'react-hook-form'
import { Container } from '@mui/material'
import { FormFields } from '@/types'
import SelectRegion from '@/components/UI/Selects/SelectRegion'

interface Props {}

const OsnovanieForm = ({ ...props }: Props) => {
    const { control } = useForm<FormFields>()
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
            <FormContainer {...props} sx={{ marginTop: 5 }}>
                <SelectPartyType control={control} />
                <SelectRegion control={control} />
            </FormContainer>
        </Container>
    )
}

export default OsnovanieForm
