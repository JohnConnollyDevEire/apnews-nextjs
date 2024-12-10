import gql from 'graphql-tag'

import { html5AudioPlayerSourceFragment } from './html5AudioPlayerSourceFragment'

export const html5AudioPlayerFragment = gql`
  fragment html5AudioPlayerFragment on Html5AudioPlayer {
    __typename
    sources {
      ...html5AudioPlayerSourceFragment
    }
  }
  ${html5AudioPlayerSourceFragment}
`
