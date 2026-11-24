import {getConfig} from "../config/config.js"

export function setTitle(pageTitle, mainTitle, sep) {
    mainTitle = mainTitle ?? getConfig().title.default
    sep = sep ?? getConfig().title.separator
    if (!mainTitle) sep = ''
    document.title = pageTitle ? `${pageTitle}${sep}${mainTitle}` : mainTitle
}