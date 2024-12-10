import gql from 'graphql-tag'

export const htmlModuleFragment = gql`
  fragment htmlModuleFragment on HtmlModule {
    __typename
    ampFallbackUrl
    anchorId
    embedCaption
    rawHtml
  }
`
