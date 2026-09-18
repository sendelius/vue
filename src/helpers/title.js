export function setTitle(pageTitle, mainTitle, sep) {
    if (!sep) sep = ' - '
    if (!mainTitle) sep = ''
    document.title = pageTitle ? `${pageTitle}${sep}${mainTitle}` : mainTitle
}