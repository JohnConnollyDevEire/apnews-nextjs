import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'

export const youtubePlayerFragment = gql`
  fragment youtubePlayerFragment on YouTubeVideoPlayer {
    autoplay
    id
    liveVideo
    muted
    playerId
    seekSeconds
    typeId
    videoId
    videoPosterImage {
      ...imageFragment
    }
    videoThumbnailImage {
      ...imageFragment
    }
    videoTitle
    youTubeUrl
  }
  ${imageFragment}
`
