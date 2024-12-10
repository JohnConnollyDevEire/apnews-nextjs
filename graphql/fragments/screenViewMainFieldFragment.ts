import gql from 'graphql-tag'

import { columnContainerModuleFragment } from './columnContainerModuleFragment'
import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { htmlModuleFragment } from './htmlModuleFragment'
import { iFrameModuleFragment } from './iFrameModuleFragment'
import { nativoAdFragment } from './nativoAdFragment'
import { pageListModuleFragment } from './pageListModuleFragment'
import { pagePromoModuleFragment } from './pagePromoModuleFragment'
import { pollModuleFragment } from './pollModuleFragment'
import { searchResultsModule } from './searchResultsModule'
import { taboolaRecommendationModuleFragment } from './taboolaRecommendationModuleFragment'
import { teamModuleFragment } from './teamModuleFragment'
import { todayInHistoryFragment } from './todayInHistoryFragment'
import { videoPlaylistModuleFragment } from './videoPlaylistModuleFragment'

export const screenViewMainFieldFragment = gql`
  fragment screenViewMainFieldFragment on ScreenViewMainField {
    ...pagePromoModuleFragment
    ...pageListModuleFragment
    ...videoPlaylistModuleFragment
    ...columnContainerModuleFragment
    ...googleDfPAdModuleFragment
    ...nativoAdFragment
    ...pollModuleFragment
    ...searchResultsModule
    ...teamModuleFragment
    ...todayInHistoryFragment
    ...taboolaRecommendationModuleFragment
    ...htmlModuleFragment
    ...iFrameModuleFragment
  }
  ${pagePromoModuleFragment}
  ${pageListModuleFragment}
  ${videoPlaylistModuleFragment}
  ${columnContainerModuleFragment}
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
  ${pollModuleFragment}
  ${searchResultsModule}
  ${teamModuleFragment}
  ${todayInHistoryFragment}
  ${taboolaRecommendationModuleFragment}
  ${htmlModuleFragment}
  ${iFrameModuleFragment}
`
