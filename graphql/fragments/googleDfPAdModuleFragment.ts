import gql from 'graphql-tag'

import { adSizeFragment } from './adSizeFragment'
import { adSizeMapFragment } from './adSizeMapFragment'

export const googleDfPAdModuleFragment = gql`
  fragment googleDfPAdModuleFragment on GoogleDfPAdModule {
    adId
    adIndex
    adModuleType
    adRefresh
    adSizeMapViews {
      ...adSizeMapFragment
    }
    adSizeMaps
    adSizeViews {
      ...adSizeFragment
    }
    adTimeout
    ampEnabled
    ampHeight
    ampMultiSizeValidation
    ampSizes
    ampWidth
    enableSticky
    gamTargetingKey
    gamTargetingValue
    hideOnDesktop
    hideOnMobile
    outOfPage
    androidPubmaticId
    iosPubmaticId
    sizes
    slot
    targetingMap
  }
  ${adSizeMapFragment}
  ${adSizeFragment}
`
