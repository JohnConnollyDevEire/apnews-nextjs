import gql from 'graphql-tag'

import { navigationLinkFragment } from './navigationLinkFragment'
import { socialLinkFragment } from './socialLinkFragment'

export const navigationGroupFragment = gql`
  fragment navigationGroupFragment on NavigationGroup {
    __typename
    items {
      ...navigationLinkFragment
      ...socialLinkFragment
    }
  }
  ${navigationLinkFragment}
  ${socialLinkFragment}
`
