import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import {libInjectCss} from 'vite-plugin-lib-inject-css'
import {resolve, relative, extname, sep} from 'node:path'
import {readdirSync} from 'node:fs'
import {fileURLToPath} from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))
const ui = resolve(root, 'src/ui')

function getComponents(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap(item => {
        const path = resolve(dir, item.name)
        if (item.isDirectory()) {
            return getComponents(path)
        }
        if (extname(item.name) !== '.vue') {
            return []
        }
        const name = relative(ui, path).replace(/\.vue$/, '').split(sep).join('/')
        return [[`ui/${name}`, path]]
    })
}

const entries = Object.fromEntries([
    ['index', resolve(root, 'src/index.ts')],
    ['style', resolve(root, 'src/style/index.scss')],
    ['theme/init', resolve(root, 'src/ui/theme/init.js')],
    ...getComponents(ui)
])

export default defineConfig({
    plugins: [
        vue(),
        libInjectCss(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.json',
            vueComponentType: true,
        })
    ],
    build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        lib: {
            entry: entries,
            formats: ['es'],
            fileName: (format, name) => `${name}.js`,
        },
        rollupOptions: {
            external: [
                'vue',
                'pinia',
                'axios',
                'maska',
                'vue-router',
            ],
        },
    }
})
