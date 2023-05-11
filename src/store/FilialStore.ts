import { create } from 'zustand'
import { IFilialStore } from 'types'
import { devtools, persist } from 'zustand/middleware'

export const FilialStore = create<IFilialStore>()(
    devtools(
        persist(
            (set) => ({
                filials: [],
                isLoading: false,
                fetchFilials: () => {}
            }),
            { name: 'FilialState' }
        ),
        { name: 'devFilialState' }
    )
)
