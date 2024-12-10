import gql from 'graphql-tag'

export const imageFragment = gql`
  fragment imageFragment on Image {
    id
    typeId
    alt
    image {
      entries {
        key
        value
      }
    }
    verticalImage {
      entries {
        key
        value
      }
    }
  }
`
