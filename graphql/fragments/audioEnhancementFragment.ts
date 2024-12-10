import gql from 'graphql-tag'

import { html5AudioPlayerFragment } from './html5AudioPlayerFragment'

export const audioEnhancementFragment = gql`
  fragment audioEnhancementFragment on AudioEnhancement {
    __typename
    anchorId
    description
    title
    audioPlayer {
      ...html5AudioPlayerFragment
    }
  }
  ${html5AudioPlayerFragment}
`
