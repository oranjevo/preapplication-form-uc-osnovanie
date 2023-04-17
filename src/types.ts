import { FieldValues } from 'react-hook-form'

type PartyType = '1' | '2' | '3' | string

export interface PartyTypeItem {
    text: string
    value: PartyType
}

export interface Region {
    value: string
    text: string
    firstLetter?: string
}

interface Product {}

export interface FormFields extends FieldValues{
    partyType: PartyType
    firstname: string
    lastname: string
    inn: string
    phone: string
    email: string
    region: string
    city: string
    products: Product[]
    comment: string
}