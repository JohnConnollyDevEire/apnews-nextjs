import { RichTextContentType } from '@/types/rich-text'

import imageFigureEntriesReducer from './image-figure-entries-reducer'

export default function richTextParser(
  storyBody: RichTextContentType[],
): string {
  let storyBodyHTML: string = '<div class="rich-text">'

  storyBody.forEach((item) => {
    if (item.__typename === 'HtmlString') {
      storyBodyHTML += item.html
    } else if (
      item.__typename === 'RichTextHeading' &&
      item.htmlText &&
      item.htmlText.length > 0
    ) {
      storyBodyHTML += item.htmlText.join('')
    } else if (
      item.__typename === 'LinkEnhancement' &&
      item.href &&
      item.body &&
      item.body.length > 0
    ) {
      storyBodyHTML += `<a href="${item.href || '#'}" target="${item.target || '_self'}">${item.body.join('')}</a>`
    } else if (
      item.__typename === 'HtmlModuleEnhancement' &&
      item.item &&
      item.item.length > 0
    ) {
      item.item.forEach((moduleItem) => {
        storyBodyHTML += moduleItem.rawHtml
      })
    } else if (
      item.__typename === 'IframeModuleEnhancement' &&
      item.item &&
      item.item.length > 0
    ) {
      item.item.forEach((moduleItem) => {
        storyBodyHTML += `
          <iframe
            src="${moduleItem.url || '#'}"
            ${moduleItem.iframeScalable ? 'allowfullscreen' : ''}
            ${moduleItem.height ? `height="${moduleItem.height}"` : ''}
            ${moduleItem.width ? `width="${moduleItem.width}"` : ''}
            ${moduleItem.name ? `name="${moduleItem.name}"` : ''}
            ${moduleItem.sandbox ? `sandbox="${moduleItem.sandbox}"` : ''}
            ${moduleItem.style ? `style="${moduleItem.style}"` : ''}
            ${moduleItem.aspectRatio ? `aspect-ratio="${moduleItem.aspectRatio}"` : ''}
          ></iframe>`
      })
    } else if (item.__typename === 'ImageEnhancement' && item.item?.[0]) {
      const image = item.item[0].image

      if (image?.entries) {
        // Convert the entries to an object for attaching as props
        const imageProps = imageFigureEntriesReducer(image.entries)
        const propKeys = Object.keys(imageProps)
        const propString = propKeys.map((key) => `${key}="${imageProps[key]}"`)

        storyBodyHTML += `<img ${propString.join(' ')} />`
      }
    } else if (
      item.__typename === 'Infobox' &&
      item.items &&
      item.items.length > 0
    ) {
      storyBodyHTML += `<div class="infobox">`
      storyBodyHTML += richTextParser(item.items)
      storyBodyHTML += `</div>`
    }
  })

  // Remove empty paragraphs, i.e.: <p></p>
  storyBodyHTML = storyBodyHTML.replace(/<p><\/p>/g, '')
  // Close the wrapper div
  storyBodyHTML += '</div>'

  return storyBodyHTML
}
