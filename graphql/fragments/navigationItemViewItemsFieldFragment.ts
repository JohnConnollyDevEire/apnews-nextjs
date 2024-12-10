import gql from 'graphql-tag'

import { topNavigationItemFragment } from './topNavigationItemFragment'

export const navigationItemViewItemsFieldFragment = gql`
  fragment navigationItemViewItemsFieldFragment on NavigationItemViewItemsField {
    ...topNavigationItemFragment
  }
  ${topNavigationItemFragment}
`
