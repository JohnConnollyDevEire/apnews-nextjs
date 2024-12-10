import gql from 'graphql-tag'

export const linkEnhancementFragment = gql`
  fragment linkEnhancementFragment on LinkEnhancement {
    __typename
    contentId
    href
    target
    body
    graphqlPath
    graphqlQueryType
  }
`
