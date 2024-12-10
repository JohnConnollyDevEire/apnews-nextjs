import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'
import { promoDescriptionFragment } from './promoDescriptionFragment'
import { sponsoredAdFragment } from './sponsoredAdFragment'

export const pagePromoModuleFragment = gql`
  fragment pagePromoModuleFragment on PagePromoModule {
    __typename
    id
    description
    graphqlPath
    graphqlQueryType
    type
    typeId
    url
    anchorId
    appPromoModuleStyle
    authorUrl
    category
    categoryUrl
    ctaButtonText
    eyebrow
    publishDate
    authorName
    promoDescription
    promoDescriptionObject {
      ...promoDescriptionFragment
    }
    primaryMediaType
    authorImage {
      ...imageFragment
    }
    eyebrow
    itemId
    itemLookupName
    itemMediaApiContentId
    itemMediaApiItemId
    itemWiresId
    target
    title
    media {
      ...imageFragment
    }
    sponsored {
      ...sponsoredAdFragment
    }
  }
  ${imageFragment}
  ${promoDescriptionFragment}
  ${sponsoredAdFragment}
`
