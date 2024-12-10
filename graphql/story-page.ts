import gql from 'graphql-tag'

import { authorFragment } from './fragments/authorFragment'
import { carouselFragment } from './fragments/carouselFragment'
import { figureFragment } from './fragments/figureFragment'
import { googleDfPAdModuleFragment } from './fragments/googleDfPAdModuleFragment'
import { htmlEmbedLeadFragment } from './fragments/htmlEmbedLeadFragment'
import { imageEnhancementViewItemField } from './fragments/imageEnhancementViewItemField'
import { nativoAdFragment } from './fragments/nativoAdFragment'
import { pageListModuleFragment } from './fragments/pageListModuleFragment'
import { sponsoredAdFragment } from './fragments/sponsoredAdFragment'
import { storyPageViewStoryBodyFieldFragment } from './fragments/storyPageViewStoryBodyFieldFragment'
import { taboolaRecommendationModuleFragment } from './fragments/taboolaRecommendationModuleFragment'
import { videoLeadFragment } from './fragments/videoLeadFragment'

export const STORY_PAGE = gql`
  query StoryQuery($path: String) {
    StoryPage(path: $path) {
      id
      pageType
      typeId
      webViewLink
      datePublished
      datePublishedISO
      pageDisplayDate
      datePublishedStamp
      dateModified
      dateModifiedISO
      dateModifiedStamp
      showUpdatedDate
      description
      environmentName
      headline
      iu
      mediaAPIItemId
      primaryMediaType
      primarySection
      production
      secondarySections
      ga4Featured
      ga4LeadMedia
      ga4LinkedVideo
      ga4Style
      searchAction
      source
      subHeadline
      targetingPageType
      targetingTags
      eyebrow
      pageTypeName
      storyFullBody
      title
      authorByline
      canonicalLink
      category
      contentId
      isFeatured
      language
      jsonLinkedData
      manifestLink
      shouldDisableNativoAds
      authorsBylineOverride
      disableHeader
      feedLink
      ga4PageType
      headerStickyTimeMs
      adBanner {
        ...googleDfPAdModuleFragment
      }
      authors {
        ...authorFragment
      }
      below {
        ...nativoAdFragment
        ...googleDfPAdModuleFragment
        ...taboolaRecommendationModuleFragment
      }
      sponsored {
        ...sponsoredAdFragment
      }
      storyLead {
        ...carouselFragment
        ...figureFragment
        ...htmlEmbedLeadFragment
        ...imageEnhancementViewItemField
        ...videoLeadFragment
      }
      storyBody {
        ...storyPageViewStoryBodyFieldFragment
      }
      trending {
        ...pageListModuleFragment
      }
    }
  }
  ${authorFragment}
  ${carouselFragment}
  ${figureFragment}
  ${googleDfPAdModuleFragment}
  ${htmlEmbedLeadFragment}
  ${imageEnhancementViewItemField}
  ${nativoAdFragment}
  ${pageListModuleFragment}
  ${sponsoredAdFragment}
  ${storyPageViewStoryBodyFieldFragment}
  ${taboolaRecommendationModuleFragment}
  ${videoLeadFragment}
`
