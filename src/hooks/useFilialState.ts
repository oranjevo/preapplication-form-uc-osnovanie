import { filialStore } from 'store/FilialStore'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

export const useFilialState = createSelectorHooks(filialStore)
