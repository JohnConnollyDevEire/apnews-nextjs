import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'

export const gallerySlideFragment = gql`
  fragment gallerySlideFragment on GallerySlide {
    __typename
    title
    caption
    credit
    media {
      ...imageFragment
    }
  }
  ${imageFragment}
`
