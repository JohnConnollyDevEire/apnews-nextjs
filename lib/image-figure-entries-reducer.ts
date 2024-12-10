import { ImageFigureEntryType } from '@/types/media-image'

export default function imageFigureEntriesReducer(
  entries: ImageFigureEntryType[],
): Record<string, string> {
  const imageProps = entries.reduce<Record<string, string>>((acc, entry) => {
    acc[entry.key.toLowerCase()] = entry.value
    return acc
  }, {})

  const protocol = `http${process.env.NODE_ENV !== 'development' ? 's' : ''}`

  // Make sure the url begins with http or https
  if (imageProps.src && imageProps.src.startsWith('//')) {
    imageProps.src = `${protocol}:${imageProps.src}`
  }

  return imageProps
}
