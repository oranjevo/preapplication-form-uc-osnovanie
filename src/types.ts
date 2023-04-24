import { FieldValues } from 'react-hook-form'
import { AutocompleteProps } from '@mui/material'

export enum PartyType {
    individual = 1,
    entrepreneur,
    company
}

type UnionPartyType = `${PartyType}`

export type TMenuItem = {
    value: string
    text: string
    id?: number
    price?: number
}

export interface PartyTypeItem extends TMenuItem {
    value: string | UnionPartyType
}

export interface Region {
    value: string
    text: string
    firstLetter?: string
}
interface Price {
    fl: number
    ip: number
    ur: number
}

interface OID {
    oid: string
    description: string
}

export interface Product {
    id: number
    name: string
    price: Price
    oids: OID[]
    required: boolean
    subitemsType: any
    subitems: any
}

export interface FormFields extends FieldValues {
    partyType: string | UnionPartyType
    firstname: string
    lastname: string
    inn: string
    phone: string
    email: string
    region: string
    city: string
    product: string
    comment: string
}

export interface FieldParams {
    LABEL: string
    PLACEHOLDER: string | undefined
}

export type CustomAutocompleteProps<T> = Omit<
    AutocompleteProps<T, undefined, undefined, false>,
    'renderInput'
>
