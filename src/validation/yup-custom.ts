import * as yup from 'yup'
import { isINNCompany, isINNIndividual, isPhoneNumber } from './validate'

declare module 'yup' {
    interface StringSchema {
        isINNIndividual(value?: string): this
        isINNCompany(value?: string): this
        isPhoneNumber(value?: string): this
    }

    interface BooleanSchema {
        agreementCheck(value?: boolean): this
    }
}

yup.addMethod<yup.StringSchema>(yup.string, 'isINNIndividual', function (this) {
    return this.test('isINNIndividual', 'Некорректный номер ИНН', (value) =>
        isINNIndividual(value!)
    )
})

yup.addMethod<yup.StringSchema>(yup.string, 'isINNCompany', function (this) {
    return this.test('isINNCompany', 'Некорректный номер ИНН', (value) => isINNCompany(value!))
})

yup.addMethod<yup.StringSchema>(yup.string, 'isPhoneNumber', function (this) {
    return this.test('isPhoneNumber', 'Некорректный номер телефона', (value) =>
        isPhoneNumber(value!)
    )
})

yup.addMethod<yup.BooleanSchema>(yup.boolean, 'agreementCheck', function (this) {
    return this.test(
        'agreementCheck',
        'Отправка заявки невозможна без подтверждения согласия',
        (value) => value === true
    )
})

yup.setLocale({
    mixed: {
        required: 'Обязательное поле',
        notType: function notType(_ref) {
            switch (_ref.type) {
                case 'number':
                    return 'Поле может содержать только числа'
                case 'string':
                    return 'Поле должно содержать буквы'
                default:
                    return '*'
            }
        }
    },
    string: {
        email: 'Некорректный адрес email. Пример: example@domain.ru',
        min: 'Длина строки должна быть не менее ${min} символов',
        max: 'Длина строки должна быть не более ${max} символов',
        matches: 'Присутствуют недопустимые символы ${regex}'
    },
    boolean: { isValue: '' }
})

export default yup
