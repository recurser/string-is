import { isEmpty } from 'lodash'

import { Converter, HtmlFormatter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'html'

// Taken from https://github.com/sindresorhus/html-tags/blob/main/html-tags.json
const tags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'math',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
]

// Regexes taken from https://github.com/sindresorhus/is-html/blob/main/index.js
const basicRegex =
  /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/gi
const fullRegex = new RegExp(
  tags.map((tag) => `<${tag}\\b[^>]*>`).join('|'),
  'ig',
)

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is HTML.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // If we haven't found a tag in the first 1000 chars, it's probably not HTML
  const sample = input.trim().slice(0, 1000)

  if (sample.startsWith('<?xml ')) {
    // There's a separate identity for XML.
    return 0
  } else if (basicRegex.test(sample)) {
    // If we have doctype / html / body tags, we probably have HTML.
    return 100
  } else if (fullRegex.test(sample)) {
    const percentTags =
      ((sample.match(fullRegex) || []).join('').length / sample.length) * 100
    // Look at the % of characters that are within tags. Totally arbitrary, but
    // if we have at least 20% of chars in tags, we probably have HTML.
    const confidence = Math.min(percentTags * 5, 100)
    return confidence
  }

  return 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [HtmlFormatter] as Converter[]
