import fs from "node:fs/promises"
import path from "node:path"

const distDir = path.resolve("dist")

async function walk(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true })

    for (const file of files) {
        const full = path.join(dir, file.name)

        if (file.isDirectory()) {
            await walk(full)
            continue
        }

        if (!file.name.endsWith(".d.ts"))
            continue

        await fixFile(full)
    }
}

async function fixFile(file) {
    let text = await fs.readFile(file, "utf8")

    const marker = "declare const __VLS_export:"

    const pos = text.indexOf(marker)

    if (pos === -1)
        return

    const type = text.slice(pos + marker.length).trim()

    text =
        `declare const component: ${type}

export default component;
`

    await fs.writeFile(file, text)
}

await walk(distDir)

console.log("✓ fix dts - done")