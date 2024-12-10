import { MediaType } from './media-image'

export type GallerySlideType = {
  __typename: 'GallerySlide'
  title: null
  caption: null
  credit: null
  media: MediaType[]
}

export type CarouselType = {
  __typename: 'Carousel'
  anchorId?: string | null
  description?: string | null
  title?: string | null
  slides: GallerySlideType[]
}
