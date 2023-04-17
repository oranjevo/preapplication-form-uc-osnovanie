import SelectController from '@/components/UI/Control/SelectController'
import { FormFields, PartyTypeItem } from '@/types'
import { Control } from 'react-hook-form'

interface Props {
    control: Control<FormFields>
}

const SelectPartyType = ({ control }: Props) => {
    const menuItems = [
        { text: 'Физическое лицо', value: '1' },
        { text: 'Индивидуальный предпринематель', value: '2' },
        { text: 'Юридическое лицо', value: '3' }
    ]
    return (
        <SelectController<PartyTypeItem>
            control={control}
            menuItems={menuItems}
            name={'partyType'}
            label={'Получатель ЭП'}
        />
    )
}

export default SelectPartyType
