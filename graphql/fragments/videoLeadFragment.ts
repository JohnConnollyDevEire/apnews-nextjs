import gql from 'graphql-tag'

import { jwVideoPlayerFragment } from './jwVideoPlayerFragment'
import { youtubePlayerFragment } from './youtubePlayerFragment'

export const videoLeadFragment = gql`
  fragment videoLeadFragment on VideoLead {
    duration
    headline
    subHeadline
    player {
      ...jwVideoPlayerFragment
      ...youtubePlayerFragment
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
`
