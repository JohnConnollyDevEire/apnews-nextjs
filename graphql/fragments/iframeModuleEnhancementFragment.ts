import gql from 'graphql-tag'

import { iFrameModuleFragment } from './iFrameModuleFragment'

export const iframeModuleEnhancementFragment = gql`
  fragment iframeModuleEnhancementFragment on IframeModuleEnhancement {
    __typename
    item {
      ...iFrameModuleFragment
    }
  }
  ${iFrameModuleFragment}
`
