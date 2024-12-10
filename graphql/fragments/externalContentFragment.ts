import gql from 'graphql-tag'

export const externalContentFragment = gql`
  fragment externalContentFragment on ExternalContent {
    __typename
    ampFallbackUrl
    embed
  }
`
