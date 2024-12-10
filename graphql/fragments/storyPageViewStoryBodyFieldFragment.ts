import gql from 'graphql-tag'

import { adRichTextElementFragment } from './adRichTextElementFragment'
import { attachmentEnhancementFragment } from './attachmentEnhancementFragment'
import { audioEnhancementFragment } from './audioEnhancementFragment'
import { blockquoteEnhancementFragment } from './blockquoteEnhancementFragment'
import { carouselEnhancementFragment } from './carouselEnhancementFragment'
import { externalContentWrapperFragment } from './externalContentWrapperFragment'
import { horizontalRuleEnhancementFragment } from './horizontalRuleEnhancementFragment'
import { htmlModuleEnhancementFragment } from './htmlModuleEnhancementFragment'
import { htmlStringFragment } from './htmlStringFragment'
import { iframeModuleEnhancementFragment } from './iframeModuleEnhancementFragment'
import { imageEnhancementFragment } from './imageEnhancementFragment'
import { imageTwoUpEnhancementFragment } from './imageTwoUpEnhancementFragment'
import { infoboxEnhancementFragment } from './infoboxEnhancementFragment'
import { linkEnhancementFragment } from './linkEnhancementFragment'
import { listEnhancementFragment } from './listEnhancementFragment'
import { pagePromoEnhancementFragment } from './pagePromoEnhancementFragment'
import { pullQuoteEnhancementFragment } from './pullQuoteEnhancementFragment'
import { richTextHeadingEnhancementFragment } from './richTextHeadingEnhancementFragment'
import { videoEnhancementFragment } from './videoEnhancementFragment'
import { videoPlaylistEnhancementFragment } from './videoPlaylistEnhancementFragment'

export const storyPageViewStoryBodyFieldFragment = gql`
  fragment storyPageViewStoryBodyFieldFragment on StoryPageViewStoryBodyField {
    ...adRichTextElementFragment
    ...attachmentEnhancementFragment
    ...audioEnhancementFragment
    ...blockquoteEnhancementFragment
    ...carouselEnhancementFragment
    ...externalContentWrapperFragment
    ...horizontalRuleEnhancementFragment
    ...htmlStringFragment
    ...htmlModuleEnhancementFragment
    ...iframeModuleEnhancementFragment
    ...imageEnhancementFragment
    ...imageTwoUpEnhancementFragment
    ...infoboxEnhancementFragment
    ...linkEnhancementFragment
    ...listEnhancementFragment
    ...pagePromoEnhancementFragment
    ...pullQuoteEnhancementFragment
    ...richTextHeadingEnhancementFragment
    ...videoEnhancementFragment
    ...videoPlaylistEnhancementFragment
  }
  ${adRichTextElementFragment}
  ${attachmentEnhancementFragment}
  ${audioEnhancementFragment}
  ${blockquoteEnhancementFragment}
  ${carouselEnhancementFragment}
  ${externalContentWrapperFragment}
  ${horizontalRuleEnhancementFragment}
  ${htmlStringFragment}
  ${htmlModuleEnhancementFragment}
  ${iframeModuleEnhancementFragment}
  ${imageEnhancementFragment}
  ${imageTwoUpEnhancementFragment}
  ${infoboxEnhancementFragment}
  ${linkEnhancementFragment}
  ${listEnhancementFragment}
  ${pagePromoEnhancementFragment}
  ${pullQuoteEnhancementFragment}
  ${richTextHeadingEnhancementFragment}
  ${videoEnhancementFragment}
  ${videoPlaylistEnhancementFragment}
`
