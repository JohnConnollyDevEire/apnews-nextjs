import gql from 'graphql-tag'

import { carouselFragment } from './carouselFragment'
import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { htmlEmbedLeadFragment } from './htmlEmbedLeadFragment'
import { nativoAdFragment } from './nativoAdFragment'
import { pageListViewItemsFieldFragment } from './pageListViewItemsFieldFragment'
import { videoLeadFragment } from './videoLeadFragment'

export const pageListModuleFragment = gql`
  fragment pageListModuleFragment on PageListModule {
    __typename
    title
    description
    hideDate
    mobileListModuleStyle
    typeId
    anchorId
    ctaGraphqlPath
    ctaGraphqlQueryType
    ctaTarget
    ctaUrl
    ctaType
    listType
    hideStylePrompt
    subListTitle
    hideDescription
    hideSubTitle
    items {
      ...pageListViewItemsFieldFragment
    }
    lightTheme
    listInjectedAd {
      ...googleDfPAdModuleFragment
      ...nativoAdFragment
    }
    listInjectedAdRepeatsEvery
    listInjectedAdStartsAt
    listInjectedAdStopRepeatAt
    listInjectedAdAlt {
      ...googleDfPAdModuleFragment
      ...nativoAdFragment
    }
    listInjectedAdAltRepeatsEvery
    listInjectedAdAltStartsAt
    listInjectedAdAltStopRepeatAt
    moduleMediaLeadV2 {
      ...carouselFragment
      ...htmlEmbedLeadFragment
      ...videoLeadFragment
    }
  }
  ${pageListViewItemsFieldFragment}
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
  ${carouselFragment}
  ${htmlEmbedLeadFragment}
  ${videoLeadFragment}
`
