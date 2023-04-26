import { Autocomplete } from 'components/UI/Control/Autocomplete'
import { FIELDS } from 'constants/FIELDS'
import { REGIONS } from 'constants/REGIONS'
import { useFormContext } from 'react-hook-form'
import { FormFields, Region } from 'types'

const SelectRegion = () => {
    const { control } = useFormContext<FormFields>()
    const availableCodes = ['1', '2', '3', '4', '5']
    const options = REGIONS.filter((option) => availableCodes.includes(option.value))
        .map((option) => {
            const firstLetter = option.text[0].toUpperCase()
            return {
                firstLetter,
                ...option
            }
        })
        .sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))
    console.log(options)

    return (
        <Autocomplete<Region>
            control={control}
            options={options || []}
            name={'region'}
            fieldParams={FIELDS.REGION}
            groupBy={(option) => option.firstLetter!}
            getOptionLabel={(option) => option.text || ''}
            isOptionEqualToValue={(option, value) => option.text === value.text}
        />
    )
}

export default SelectRegion
