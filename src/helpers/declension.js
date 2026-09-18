export function declension(number, one, few, many) {
    const n = Math.abs(number) % 100
    const n1 = n % 10
    let word
    if (n >= 11 && n <= 19) {
        word = many
    } else if (n1 === 1) {
        word = one
    } else if (n1 >= 2 && n1 <= 4) {
        word = few
    } else {
        word = many
    }
    return `${number} ${word}`
}