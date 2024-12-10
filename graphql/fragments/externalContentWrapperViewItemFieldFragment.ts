import gql from 'graphql-tag'

import { externalContentFragment } from './externalContentFragment'
import { facebookUrlFragment } from './facebookUrlFragment'
import { instagramUrlFragment } from './instagramUrlFragment'
import { tweetUrlFragment } from './tweetUrlFragment'

export const externalContentWrapperViewItemFieldFragment = gql`
  fragment externalContentWrapperViewItemFieldFragment on ExternalContentWrapperViewItemField {
    ...externalContentFragment
    ...facebookUrlFragment
    ...instagramUrlFragment
    ...tweetUrlFragment
  }
  ${externalContentFragment}
  ${facebookUrlFragment}
  ${instagramUrlFragment}
  ${tweetUrlFragment}
`
