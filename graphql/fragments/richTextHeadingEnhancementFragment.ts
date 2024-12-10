import gql from 'graphql-tag'

export const richTextHeadingEnhancementFragment = gql`
  fragment richTextHeadingEnhancementFragment on RichTextHeading {
    __typename
    htmlText
  }
`
