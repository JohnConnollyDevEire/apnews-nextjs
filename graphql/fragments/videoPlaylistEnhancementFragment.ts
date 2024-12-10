import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'
import { jwVideoPlayerFragment } from './jwVideoPlayerFragment'
import { videoPlaylistItemFragment } from './videoPlaylistItemFragment'
import { youtubePlayerFragment } from './youtubePlayerFragment'

export const videoPlaylistEnhancementFragment = gql`
  fragment videoPlaylistEnhancementFragment on VideoPlaylistEnhancement {
    __typename
    title
    player {
      ...jwVideoPlayerFragment
      ...youtubePlayerFragment
    }
    playlist {
      ...videoPlaylistItemFragment
    }
    thumbnail {
      ...imageFragment
    }
  }
  ${jwVideoPlayerFragment}
  ${youtubePlayerFragment}
  ${videoPlaylistItemFragment}
  ${imageFragment}
`
