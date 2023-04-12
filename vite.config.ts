import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from  '@vitejs/plugin-legacy'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        legacy({
          targets: [
              ">0.2%",
              "not dead",
              "not op_mini all"
          ],
        }),
        react(),
        tsconfigPaths()
    ],
})
