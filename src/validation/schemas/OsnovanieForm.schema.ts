import yup from '../yup-custom'

export const osnovanieFormSchema = yup.object({
    partyType: yup.string().required(),
    firstname: yup.string().required().min(2).max(50),
    lastname: yup.string().required().min(2).max(50),
    inn: yup.string().required().min(12).max(12).isINNIndividual(),
    phone: yup.string().required().isPhoneNumber(),
    email: yup.string().required().email(),
    region: yup.string().required(),
    city: yup.string().required().min(2).max(30),
    product: yup.string().required(),
    comment: yup.string().max(200)
})
