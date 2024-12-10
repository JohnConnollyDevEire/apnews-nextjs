import gql from 'graphql-tag'

import { jwVideoPlayerFragment } from './jwVideoPlayerFragment'
import { videoPlaylistItemFragment } from './videoPlaylistItemFragment'
import { youtubePlayerFragment } from './youtubePlayerFragment'

export const videoPlaylistModuleFragment = gql`
  fragment videoPlaylistModuleFragment on VideoPlaylistModule {
    __typename
    title
    description
    id
    typeId
    videoPlaylistStyle
    anchorId
    ctaTarget
    ctaUrl
    iu
    player {
      ...jwVideoPlayerFragment
      ...youtubePlayerFragment
    }
    playlist {
      ...videoPlaylistItemFragment
    }
    appAutostart
    appPlayerId
    appMuteOnStart
    appRemoveAds
    appAdOffset
    appAdScheduleTagAndroid
  }
  ${jwVideoPlayerFragment}
  ${youtubePlayerFragment}
  ${videoPlaylistItemFragment}
`
