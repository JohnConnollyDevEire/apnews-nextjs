import gql from 'graphql-tag'

export const navigationLinkFragment = gql`
  fragment navigationLinkFragment on NavigationLink {
    __typename
    contentId
    count
    description
    graphqlPath
    graphqlQueryType
    href
    iconUrl
    isActive
    itemType
    status
    target
    text
  }
`
