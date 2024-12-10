import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'

export const jwVideoPlayerFragment = gql`
  fragment jwVideoPlayerFragment on JwVideoPlayer {
    __typename
    id
    typeId
    autoplay
    liveVideo
    mediaId
    muted
    playerId
    seekSeconds
    videoFileType
    videoId
    videoSourceUrl
    videoTitle
    videoUuid
    videoThumbnailImage {
      ...imageFragment
    }
  }
  ${imageFragment}
`
