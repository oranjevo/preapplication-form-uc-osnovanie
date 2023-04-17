import AutocompleteController from '@/components/UI/Control/AutocompleteController'
import { FormFields, Region } from '@/types'
import { Control } from 'react-hook-form'
import { REGIONS } from '@/constants/REGIONS'

interface Props {
    control: Control<FormFields>
}

const SelectRegion = ({ control }: Props) => {
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
        <AutocompleteController<Region>
            control={control}
            options={options || []}
            name={'region'}
            label={'Регион'}
            groupBy={(option) => option.firstLetter!}
            getOptionLabel={(option) => option.text || ''}
            isOptionEqualToValue={(option, value) => option.text === value.text}
        />
    )
}

export default SelectRegion
