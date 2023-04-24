export const isPhoneNumber = (value: string) => {
    const regEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
    return regEx.test(value)
}
