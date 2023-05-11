import {
    Phone,
    Inn,
    LastName,
    FirstName,
    Email,
    Comment,
    City,
    SelectProduct,
    SelectPartyType,
    SelectRegion
} from 'components/UI/Fields'
import { Button, HeaderText, FormContainer } from 'components/UI'
import { useForm } from 'react-hook-form'
import { osnovanieFormSchema } from 'validation/schemas/OsnovanieForm.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { IFormFields } from 'types'
import { useFormState } from 'hooks/useFormState'
import { DoneFillForm } from './DoneFillForm'

const OsnovanieForm = () => {
    const fields = useFormState.useFields()
    const resetFields = useFormState.useResetFields()
    const status = useFormState.useStatus()
    const toggleStatus = useFormState.useToggleStatus()
    const methods = useForm<IFormFields>({
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
        resolver: yupResolver(osnovanieFormSchema),
        defaultValues: fields
    })
    const { reset, handleSubmit } = methods

    const submitHandler = () => {
        resetFields()
        reset()
        toggleStatus()
    }

    const newPreapplicationHandler = () => {
        toggleStatus()
    }

    return status.done ? (
        <DoneFillForm newPreapplicationHandler={newPreapplicationHandler} />
    ) : (
        <>
            <HeaderText width={400}>Оформите заявку на получение электронной подписи</HeaderText>
            <FormContainer reactHookFormMethods={methods}>
                <SelectPartyType />
                <SelectProduct />
                <FirstName />
                <LastName />
                <Email />
                <Phone />
                <SelectRegion />
                <City />
                <Inn />
                <Comment />
                <Button
                    name={'Отправить заявку'}
                    type={'submit'}
                    onClick={handleSubmit(submitHandler)}
                />
            </FormContainer>
        </>
    )
}

export { OsnovanieForm }
