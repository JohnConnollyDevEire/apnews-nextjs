import gql from 'graphql-tag'

import { navigationGroupFragment } from './navigationGroupFragment'
import { navigationLinkFragment } from './navigationLinkFragment'
import { socialLinkFragment } from './socialLinkFragment'

export const navigationItemFragment = gql`
  fragment navigationItemFragment on NavigationItem {
    __typename
    text
    target
    itemType
    isCurrent
    iconUrl
    href
    graphqlQueryType
    graphqlPath
    contentId
    items {
      ...navigationGroupFragment
      ...navigationLinkFragment
      ...socialLinkFragment
    }
  }
  ${navigationGroupFragment}
  ${navigationLinkFragment}
  ${socialLinkFragment}
`
