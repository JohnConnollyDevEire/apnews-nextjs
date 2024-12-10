import gql from 'graphql-tag'

export const socialLinkFragment = gql`
  fragment socialLinkFragment on SocialLink {
    __typename
    body
    href
    itemType
    socialService
  }
`
