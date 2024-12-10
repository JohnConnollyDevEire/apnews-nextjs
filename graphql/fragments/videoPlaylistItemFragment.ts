import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'
import { jwVideoPlayerFragment } from './jwVideoPlayerFragment'
import { youtubePlayerFragment } from './youtubePlayerFragment'

export const videoPlaylistItemFragment = gql`
  fragment videoPlaylistItemFragment on VideoPlaylistItem {
    __typename
    title
    description
    target
    type
    url
    videoSourceUrl
    contentId
    date
    duration
    player {
      ...jwVideoPlayerFragment
      ...youtubePlayerFragment
    }
    posterImage {
      ...imageFragment
    }
    thumbnailImage {
      ...imageFragment
    }
  }
  ${jwVideoPlayerFragment}
  ${youtubePlayerFragment}
  ${imageFragment}
`
