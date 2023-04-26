import { Select } from 'components/UI/Control/Select'
import { FIELDS } from 'constants/FIELDS'
import { apiResponse } from 'constants/productResponse'
import { useFormContext } from 'react-hook-form'
import { FormFields, TMenuItem } from 'types'

const SelectProduct = () => {
    const { control } = useFormContext<FormFields>()
    const flProducts = apiResponse.filter((product) => {
        return product.price.fl !== -1
    })

    const menuItems = flProducts.reduce((menuItems: TMenuItem[], product) => {
        const { id, name, price } = product
        menuItems.push({
            value: String(id),
            text: name,
            price: price.fl
        })
        return menuItems
    }, [])

    return (
        <Select
            control={control}
            fieldParams={FIELDS.PRODUCTS}
            name={'product'}
            menuItems={menuItems}
        />
    )
}

export default SelectProduct
