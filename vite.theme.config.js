import {defineConfig} from 'vite'
import {resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: resolve(root, 'src/theme/init.js'),
            name: 'SndThemeInit',
            formats: ['iife'],
            fileName: () => 'theme-init.js',
        },
    },
})