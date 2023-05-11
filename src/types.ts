import { FieldValues } from 'react-hook-form'
import { AutocompleteProps } from '@mui/material'

export enum PartyType {
    individual = 1,
    entrepreneur,
    company
}

export type UnionPartyType = `${PartyType}`

export type TMenuItem = {
    value: string
    text: string
    id?: number
    price?: number
}

export interface PartyTypeItem extends TMenuItem {
    value: string | UnionPartyType
}

export interface IAutocompleteOption {
    value: string
    text: string
    firstLetter?: string
}

interface IPrice {
    fl: number
    ip: number
    ur: number
}

interface OID {
    oid: string
    description: string
}

export interface IProduct {
    id: number
    name: string
    price: IPrice
    oids: OID[]
    required: boolean
    subitemsType: any
    subitems: any
}

export interface IFormFields extends FieldValues {
    partyType: string | UnionPartyType
    firstname: string
    lastname: string
    inn: string
    phone: string
    email: string
    region: null | string
    city: string
    product: string
    comment: string
}

export interface IFieldParams {
    LABEL: string
    PLACEHOLDER: string | undefined
}

export type CustomAutocompleteProps<T> = Omit<
    AutocompleteProps<T, undefined, undefined, false>,
    'renderInput'
>

export type PickField<T extends keyof IFormFields> = Pick<IFormFields, T>

export interface IFormStatus {
    done: boolean
}

export interface IFormStore {
    fields: IFormFields
    status: IFormStatus
    setFields: (newState: string | null, fieldName: keyof IFormFields) => void
    resetFields: () => void
    isEmptyField: (fieldName: keyof Omit<IFormFields, 'region' | 'partyType'>) => boolean
    toggleStatus: () => void
}

export interface IFilial {
    id: string
    name: string
    region: number
    postIndex: string
    legalAddress: string
    phoneNumber: number
    additionalNumber: number
}

export interface IFilialStore {
    filials: IFilial[] | []
    isLoading: boolean
    fetchFilials: () => void
}
