import gql from 'graphql-tag'

import { taboolaHeadScriptFragment } from './taboolaHeadScriptFragment'

export const taboolaRecommendationModuleFragment = gql`
  fragment taboolaRecommendationModuleFragment on TaboolaRecommendationModule {
    adModuleType
    mode
    placement
    slot
    darkModePlacement
    darkModeSlot
    targetType
    taboolaHeadScript {
      ...taboolaHeadScriptFragment
    }
  }
  ${taboolaHeadScriptFragment}
`
