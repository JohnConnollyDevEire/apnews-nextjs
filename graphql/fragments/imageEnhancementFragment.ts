import gql from 'graphql-tag'

import { imageEnhancementViewItemField } from './imageEnhancementViewItemField'

export const imageEnhancementFragment = gql`
  fragment imageEnhancementFragment on ImageEnhancement {
    item {
      ...imageEnhancementViewItemField
    }
  }
  ${imageEnhancementViewItemField}
`
