import gql from 'graphql-tag'

import { pageListModuleFragment } from './pageListModuleFragment'

export const listEnhancementFragment = gql`
  fragment listEnhancementFragment on PageListEnhancement {
    __typename
    item {
      ...pageListModuleFragment
    }
  }
  ${pageListModuleFragment}
`
