import {getConfig} from "../config/config.js"

export function setTitle(pageTitle, mainTitle, sep) {
    mainTitle = mainTitle ?? getConfig().baseTitle
    sep = sep ?? getConfig().baseTitleSeparator
    if (!mainTitle) sep = ''
    document.title = pageTitle ? `${pageTitle}${sep}${mainTitle}` : mainTitle
}