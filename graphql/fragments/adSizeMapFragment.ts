import gql from 'graphql-tag'

import { adSizeFragment } from './adSizeFragment'

export const adSizeMapFragment = gql`
  fragment adSizeMapFragment on AdSizeMap {
    minimumWindowSize
    adSizes {
      ...adSizeFragment
    }
  }
  ${adSizeFragment}
`
