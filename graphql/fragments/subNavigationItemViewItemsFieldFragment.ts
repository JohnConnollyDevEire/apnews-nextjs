import gql from 'graphql-tag'

import { navigationLinkFragment } from './navigationLinkFragment'

export const subNavigationItemViewItemsFieldFragment = gql`
  fragment subNavigationItemViewItemsFieldFragment on NavigationItemViewItemsField {
    ...navigationLinkFragment
  }
  ${navigationLinkFragment}
`
