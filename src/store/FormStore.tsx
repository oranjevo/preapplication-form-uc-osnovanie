import { IFormStore } from 'types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {
    partyType: '',
    firstname: '',
    lastname: '',
    inn: '',
    phone: '',
    email: '',
    region: null,
    city: '',
    product: '',
    comment: ''
}

export const formStore = create<IFormStore>()(
    devtools(
        persist(
            (set, get) => ({
                fields: {
                    ...initialState
                },
                status: {
                    done: false
                },
                setFields: (newState, fieldName) => {
                    set(
                        (state) => ({
                            fields: {
                                ...state.fields,
                                [fieldName]: newState
                            }
                        }),
                        false,
                        'setAction'
                    )
                },
                toggleStatus: () => {
                    set(
                        (state) => ({
                            status: {
                                done: !state.status.done
                            }
                        }),
                        false,
                        'toggleAction'
                    )
                },
                resetFields: () => {
                    set({ fields: initialState }, false, 'resetAction')
                },
                isEmptyField: (fieldName) => get().fields[fieldName] === ''
            }),
            { name: 'FormState' }
        ),
        { name: 'devFormState' }
    )
)
