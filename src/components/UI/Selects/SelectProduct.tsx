import { FIELDS } from '@/constants/FIELDS'
import { Control } from 'react-hook-form'
import { FormFields, TMenuItem } from '@/types'
import SelectController from '@/components/UI/Control/SelectController'
import { apiResponse } from '@/constants/productResponse'

interface Props {
    control: Control<FormFields>
}

const SelectProduct = ({ control }: Props) => {
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
        <SelectController
            control={control}
            fieldParams={FIELDS.PRODUCTS}
            name={'product'}
            menuItems={menuItems}
        />
    )
}

export default SelectProduct
