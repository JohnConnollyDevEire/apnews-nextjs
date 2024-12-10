import gql from 'graphql-tag'

export const authorSocialLinkFragment = gql`
  fragment authorSocialLinkFragment on SocialLink {
    body
    href
    itemType
    socialService
  }
`
