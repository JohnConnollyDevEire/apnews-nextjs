import { ImageFigureType } from './media-image'

export type StoryLeadType = {
  __typename: 'Carousel' | 'Figure' | 'HtmlEmbed' | 'VideoLead'
  alt?: string
  caption?: {
    items?: string[]
  }[]
  image?: ImageFigureType
  nativeDimension?: boolean
}
