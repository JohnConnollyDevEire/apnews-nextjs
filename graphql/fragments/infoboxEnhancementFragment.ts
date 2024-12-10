import gql from 'graphql-tag'

import { horizontalRuleEnhancementFragment } from './horizontalRuleEnhancementFragment'
import { htmlStringFragment } from './htmlStringFragment'
import { linkEnhancementFragment } from './linkEnhancementFragment'
import { richTextHeadingEnhancementFragment } from './richTextHeadingEnhancementFragment'

export const infoboxEnhancementFragment = gql`
  fragment infoboxEnhancementFragment on Infobox {
    __typename
    anchorId
    plainText
    items {
      ...horizontalRuleEnhancementFragment
      ...htmlStringFragment
      ...linkEnhancementFragment
      ...richTextHeadingEnhancementFragment
    }
  }
  ${horizontalRuleEnhancementFragment}
  ${htmlStringFragment}
  ${linkEnhancementFragment}
  ${richTextHeadingEnhancementFragment}
`
