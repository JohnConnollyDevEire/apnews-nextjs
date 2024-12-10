import gql from 'graphql-tag'

export const instagramUrlFragment = gql`
  fragment instagramUrlFragment on InstagramUrl {
    __typename
    ampFallbackUrl
    embed
    postId
  }
`
