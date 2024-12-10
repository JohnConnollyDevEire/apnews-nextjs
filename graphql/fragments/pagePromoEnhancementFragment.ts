import gql from 'graphql-tag'

import { pagePromoModuleFragment } from './pagePromoModuleFragment'

export const pagePromoEnhancementFragment = gql`
  fragment pagePromoEnhancementFragment on PagePromoEnhancement {
    __typename
    item {
      ...pagePromoModuleFragment
    }
  }
  ${pagePromoModuleFragment}
`
