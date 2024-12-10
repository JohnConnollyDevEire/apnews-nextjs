import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'
import { jwVideoPlayerFragment } from './jwVideoPlayerFragment'
import { youtubePlayerFragment } from './youtubePlayerFragment'

export const videoEnhancementFragment = gql`
  fragment videoEnhancementFragment on VideoEnhancement {
    __typename
    anchorId
    description
    title
    player {
      ...jwVideoPlayerFragment
      ...youtubePlayerFragment
    }
    thumbnail {
      ...imageFragment
    }
  }
  ${jwVideoPlayerFragment}
  ${youtubePlayerFragment}
  ${imageFragment}
`
