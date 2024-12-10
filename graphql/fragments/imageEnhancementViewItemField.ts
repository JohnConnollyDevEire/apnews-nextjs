import gql from 'graphql-tag'

export const imageEnhancementViewItemField = gql`
  fragment imageEnhancementViewItemField on Figure {
    anchorId
    id
    caption
    credit
    typeId
    image {
      entries {
        key
        value
      }
    }
  }
`
