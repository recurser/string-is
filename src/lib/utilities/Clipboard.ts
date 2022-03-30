/**
 * Copies the given string to the browser's clipboard.
 *
 * @param text - the text to copy.
 */
export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}
