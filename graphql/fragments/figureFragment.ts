import gql from 'graphql-tag'

export const figureFragment = gql`
  fragment figureFragment on Figure {
    __typename
    alt
    anchorId
    id
    typeId
    caption
    credit
    image {
      entries {
        key
        value
      }
    }
  }
`
