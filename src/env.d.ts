/// <reference types="env" />

interface ImportMetaEnv {
    readonly VITE_APP_EXAMPLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}