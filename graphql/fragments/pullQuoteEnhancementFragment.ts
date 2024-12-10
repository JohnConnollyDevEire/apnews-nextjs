import gql from 'graphql-tag'

export const pullQuoteEnhancementFragment = gql`
  fragment pullQuoteEnhancementFragment on PullQuote {
    __typename
    attribution
    quote
  }
`
