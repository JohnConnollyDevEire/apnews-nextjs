import gql from 'graphql-tag'

import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { htmlModuleFragment } from './htmlModuleFragment'
import { iFrameModuleFragment } from './iFrameModuleFragment'
import { nativoAdFragment } from './nativoAdFragment'
import { pageListModuleFragment } from './pageListModuleFragment'
import { pagePromoModuleFragment } from './pagePromoModuleFragment'
import { pollModuleFragment } from './pollModuleFragment'
import { searchResultsModule } from './searchResultsModule'
import { taboolaRecommendationModuleFragment } from './taboolaRecommendationModuleFragment'
import { videoPlaylistModuleFragment } from './videoPlaylistModuleFragment'

export const columnContainerFragment = gql`
  fragment columnContainerFragment on ColumnContainerField {
    ...searchResultsModule
    ...pagePromoModuleFragment
    ...pageListModuleFragment
    ...pollModuleFragment
    ...videoPlaylistModuleFragment
    ...googleDfPAdModuleFragment
    ...nativoAdFragment
    ...taboolaRecommendationModuleFragment
    ...htmlModuleFragment
    ...iFrameModuleFragment
  }
  ${searchResultsModule}
  ${pagePromoModuleFragment}
  ${pageListModuleFragment}
  ${pollModuleFragment}
  ${videoPlaylistModuleFragment}
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
  ${taboolaRecommendationModuleFragment}
  ${htmlModuleFragment}
  ${iFrameModuleFragment}
`
