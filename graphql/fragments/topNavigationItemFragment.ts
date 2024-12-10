import gql from 'graphql-tag'

import { subNavigationItemViewItemsFieldFragment } from './subNavigationItemViewItemsFieldFragment'

export const topNavigationItemFragment = gql`
  fragment topNavigationItemFragment on NavigationItem {
    contentId
    graphqlPath
    graphqlQueryType
    href
    iconUrl
    isCurrent
    itemType
    target
    text
    items {
      ...subNavigationItemViewItemsFieldFragment
    }
  }
  ${subNavigationItemViewItemsFieldFragment}
`
