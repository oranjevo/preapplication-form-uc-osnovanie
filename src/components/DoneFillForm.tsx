import { HeaderText } from './UI'
import { Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Button } from './UI'
import { useFormState } from '../hooks/useFormState'

interface Props {
    newPreapplicationHandler: () => void
}

const DoneFillForm = ({ newPreapplicationHandler }: Props) => {
    useFormState
    return (
        <>
            <CheckCircleIcon
                sx={{ width: '3em', height: 'auto', marginTop: 8 }}
                color={'primary'}
            />
            <HeaderText mt={3}>Заявка в работе</HeaderText>
            <Typography textAlign={'center'} width={600} mt={2}>
                В ближайшее время с вами свяжется сотрудник Удостоверяющего Центра «Основание» для
                дальнейшей консультации по заявке
            </Typography>
            <Button name={'Заполнить новую заявку'} onClick={newPreapplicationHandler} />
        </>
    )
}

export { DoneFillForm }
