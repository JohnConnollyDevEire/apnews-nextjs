import gql from 'graphql-tag'

import { externalContentWrapperViewItemFieldFragment } from './externalContentWrapperViewItemFieldFragment'

export const externalContentWrapperFragment = gql`
  fragment externalContentWrapperFragment on ExternalContentWrapper {
    __typename
    item {
      ...externalContentWrapperViewItemFieldFragment
    }
  }
  ${externalContentWrapperViewItemFieldFragment}
`
