import gql from 'graphql-tag'

import { navigationItemFragment } from './navigationItemFragment'
import { navigationLinkFragment } from './navigationLinkFragment'
import { socialLinkFragment } from './socialLinkFragment'

export const navigationFragment = gql`
  fragment navigationFragment on Navigation {
    items {
      ...navigationItemFragment
      ...navigationLinkFragment
      ...socialLinkFragment
    }
  }
  ${navigationItemFragment}
  ${navigationLinkFragment}
  ${socialLinkFragment}
`
