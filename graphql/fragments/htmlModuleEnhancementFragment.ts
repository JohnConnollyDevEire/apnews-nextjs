import gql from 'graphql-tag'

import { htmlModuleFragment } from './htmlModuleFragment'

export const htmlModuleEnhancementFragment = gql`
  fragment htmlModuleEnhancementFragment on HtmlModuleEnhancement {
    __typename
    item {
      ...htmlModuleFragment
    }
  }
  ${htmlModuleFragment}
`
