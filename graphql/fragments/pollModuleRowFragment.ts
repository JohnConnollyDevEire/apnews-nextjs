import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'

export const pollModuleRowFragment = gql`
  fragment pollModuleRowFragment on PollModuleRow {
    __typename
    id
    typeId
    conferenceAlias
    firstPlaceVotes
    graphqlPath
    graphqlQueryType
    pointsTotalFormatted
    previousRank
    rank
    teamPageUrl
    teamRecord
    teamShortName
    trendDirection
    trendNumber
    twitterShareText
    teamLogo {
      ...imageFragment
    }
  }
  ${imageFragment}
`
