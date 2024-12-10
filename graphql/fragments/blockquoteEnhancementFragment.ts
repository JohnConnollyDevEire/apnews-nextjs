import gql from 'graphql-tag'

export const blockquoteEnhancementFragment = gql`
  fragment blockquoteEnhancementFragment on BlockQuote {
    __typename
    attribution
    quote
  }
`
