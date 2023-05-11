import { Select } from 'components/UI/Control/Select'
import { FIELDS } from 'constants/FIELDS'
import { PartyTypeItem } from 'types'

const SelectPartyType = () => {
    const menuItems: PartyTypeItem[] = [
        { text: 'Физическое лицо', value: '1' },
        { text: 'Индивидуальный предпринематель', value: '2' },
        { text: 'Юридическое лицо', value: '3' }
    ]
    return (
        <Select<PartyTypeItem>
            menuItems={menuItems}
            name={'partyType'}
            fieldParams={FIELDS.PARTY_TYPE}
        />
    )
}

export { SelectPartyType }
