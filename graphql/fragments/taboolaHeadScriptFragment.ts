import gql from 'graphql-tag'

export const taboolaHeadScriptFragment = gql`
  fragment taboolaHeadScriptFragment on TaboolaHeadScript {
    __typename
    androidPublisherId
    iosPublisherId
    type
  }
`
