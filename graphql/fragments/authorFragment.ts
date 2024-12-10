import gql from 'graphql-tag'

import { authorSocialLinkFragment } from './authorSocialLinkFragment'
import { imageFragment } from './imageFragment'

export const authorFragment = gql`
  fragment authorFragment on Author {
    biography
    image {
      ...imageFragment
    }
    name
    url
    graphqlPath
    graphqlQueryType
    authorSocialLinks {
      items {
        ...authorSocialLinkFragment
      }
    }
  }
  ${authorSocialLinkFragment}
  ${imageFragment}
`
