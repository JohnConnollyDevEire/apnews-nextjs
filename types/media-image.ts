export type ImageFigureEntryType = {
  __typename: 'MapEntry'
  key: string
  value: string
}

export type ImageFigureType = {
  __typename: 'Map'
  entries?: ImageFigureEntryType[]
}

export type MediaType = {
  __typename: string
  image: ImageFigureType
  id?: string | null
  typeId?: string | null
  alt?: string | null
}

export type ImageType = {
  __typename: 'Image'
  publicUrl: string
  size?: {
    height?: number
    width?: number
    src?: string
  }
}
