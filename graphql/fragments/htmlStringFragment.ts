import gql from 'graphql-tag'

export const htmlStringFragment = gql`
  fragment htmlStringFragment on HtmlString {
    html
  }
`
