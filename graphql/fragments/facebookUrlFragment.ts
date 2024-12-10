import gql from 'graphql-tag'

export const facebookUrlFragment = gql`
  fragment facebookUrlFragment on FacebookUrl {
    __typename
    ampFallbackUrl
    embed
    postUrl
  }
`
