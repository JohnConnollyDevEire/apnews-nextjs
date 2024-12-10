import gql from 'graphql-tag'

export const htmlEmbedLeadFragment = gql`
  fragment htmlEmbedLeadFragment on HtmlEmbedLead {
    rawHtml
  }
`
