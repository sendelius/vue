import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.json',
            vueComponentType: true,
        })
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'SendeliusVue',
            fileName: 'sendelius-vue',
            formats: ['es'],
        },
        rollupOptions: {
            external: [
                'vue',
                'maska',
            ],
        },
    }
})
