import { isEmpty } from 'lodash'

import { HtmlOutput, Output } from '@lib/outputs'

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

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // If we haven't found a tag in the first 1000 chars, it's probably not HTML
  const sample = input.trim().slice(0, 1000)

  if (basicRegex.test(sample) && false) {
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

export const outputs = [HtmlOutput] as Output[]
