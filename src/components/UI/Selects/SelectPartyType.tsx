import SelectController from '@/components/UI/Control/SelectController'
import { FormFields, PartyTypeItem } from '@/types'
import { Control } from 'react-hook-form'
import { FIELDS } from '@/constants/FIELDS'

interface Props {
    control: Control<FormFields>
}

const SelectPartyType = ({ control }: Props) => {
    const menuItems: PartyTypeItem[] = [
        { text: 'Физическое лицо', value: '1' },
        { text: 'Индивидуальный предпринематель', value: '2' },
        { text: 'Юридическое лицо', value: '3' }
    ]
    return (
        <SelectController<PartyTypeItem>
            control={control}
            menuItems={menuItems}
            name={'partyType'}
            fieldParams={FIELDS.PARTY_TYPE}
        />
    )
}

export default SelectPartyType
