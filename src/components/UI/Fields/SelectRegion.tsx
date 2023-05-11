import { Autocomplete } from 'components/UI/Control/Autocomplete'
import { FIELDS } from 'constants/FIELDS'
import { REGIONS } from 'constants/REGIONS'
import { IAutocompleteOption } from 'types'
import { useFormState } from 'hooks/useFormState'

const SelectRegion = () => {
    const { region: regionField } = useFormState.useFields()
    const value = REGIONS.find((region) => region.value === regionField)

    const availableCodes = ['1', '2', '3', '4', '5']
    const options = REGIONS.filter((region) => availableCodes.includes(region.value))
        .map((option) => {
            const firstLetter = option.text[0].toUpperCase()
            return {
                firstLetter,
                ...option
            }
        })
        .sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))

    return (
        <Autocomplete<IAutocompleteOption>
            options={options || []}
            name={'region'}
            fieldParams={FIELDS.REGION}
            groupBy={(option) => option.firstLetter!}
            value={value ?? null}
            getOptionLabel={(option) => option.text || ''}
            isOptionEqualToValue={(option, value) =>
                option.value === value.value || value.value === ''
            }
        />
    )
}

export { SelectRegion }
