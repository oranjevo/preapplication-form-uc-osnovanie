import { formStore } from 'store/FormStore'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

export const useFormState = createSelectorHooks(formStore)
