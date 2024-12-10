import gql from 'graphql-tag'

import { figureFragment } from './figureFragment'

export const imageTwoUpEnhancementFragment = gql`
  fragment imageTwoUpEnhancementFragment on ImageTwoUpEnhancement {
    __typename
    image1 {
      ...figureFragment
    }
    image2 {
      ...figureFragment
    }
  }
  ${figureFragment}
`
