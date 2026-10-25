/**
 * French typography: a non-breaking space before ? ! : ; » and between a number and €, so neither ever wraps
 * alone (the text itself is unchanged).
 */
export const nb = (text: string) => text.replace(/ ([?!:;»])/g, ' $1').replace(/(\d) €/g, '$1 €')
