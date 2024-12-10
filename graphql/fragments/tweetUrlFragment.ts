import gql from 'graphql-tag'

export const tweetUrlFragment = gql`
  fragment tweetUrlFragment on TweetUrl {
    __typename
    ampFallbackUrl
    embed
    postId
  }
`
