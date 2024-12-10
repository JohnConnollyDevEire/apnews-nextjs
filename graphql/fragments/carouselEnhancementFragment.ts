import gql from 'graphql-tag'

import { carouselFragment } from './carouselFragment'

export const carouselEnhancementFragment = gql`
  fragment carouselEnhancementFragment on CarouselEnhancement {
    __typename
    item {
      ...carouselFragment
    }
  }
`
