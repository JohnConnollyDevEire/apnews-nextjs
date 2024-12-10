import gql from 'graphql-tag'

export const html5AudioPlayerSourceFragment = gql`
  fragment html5AudioPlayerSourceFragment on Html5AudioSource {
    __typename
    src
    type
  }
`
