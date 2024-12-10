import gql from 'graphql-tag'

export const adSizeFragment = gql`
  fragment adSizeFragment on AdSize {
    label
    height
    width
  }
`
