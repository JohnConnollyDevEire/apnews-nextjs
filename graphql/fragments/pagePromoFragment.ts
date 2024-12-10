import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'
import { sponsoredAdFragment } from './sponsoredAdFragment'

export const pagePromoFragment = gql`
  fragment pagePromoFragment on PagePromo {
    __typename
    title
    description
    id
    type
    typeId
    url
    authorUrl
    category
    categoryUrl
    eyebrow
    graphqlPath
    graphqlQueryType
    itemId
    itemLookupName
    itemMediaApiContentId
    itemMediaApiItemId
    itemWiresId
    leadType
    primaryMediaType
    publishDate
    publishDateStamp
    target
    authorImage {
      ...imageFragment
    }
    media {
      ...imageFragment
    }
    sponsored {
      ...sponsoredAdFragment
    }
  }
  ${imageFragment}
  ${sponsoredAdFragment}
`
