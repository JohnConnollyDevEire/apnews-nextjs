import gql from 'graphql-tag'

import { gallerySlideFragment } from './gallerySlideFragment'

export const carouselFragment = gql`
  fragment carouselFragment on Carousel {
    __typename
    anchorId
    description
    title
    slides {
      ...gallerySlideFragment
    }
  }
  ${gallerySlideFragment}
`
