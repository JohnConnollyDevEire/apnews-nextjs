import { ImageFigureType } from '@/types/media-image'

import imageFigureEntriesReducer from '@/lib/image-figure-entries-reducer'
import LinkHelper from '@/lib/link-helper'

export default function EntriesImage({
  entries,
  ...props
}: {
  entries: ImageFigureType['entries']
  [key: string]: any
}) {
  if (!entries) {
    return null
  }

  // Convert the entries to an object for attaching as props
  const imageProps = imageFigureEntriesReducer(entries)

  return <img {...imageProps} {...props} />
}
