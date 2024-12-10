import gql from 'graphql-tag'

import { imageFragment } from './imageFragment'

export const teamModuleFragment = gql`
  fragment teamModuleFragment on TeamModule {
    __typename
    teamShortName
    id
    typeId
    conferenceRecord
    defaultPollUrl
    graphqlPath
    graphqlQueryType
    nextGameDate
    nextOpponent
    pollDate
    pollRank
    previousGameResult
    sportType
    teamRecord
    teamLogo {
      ...imageFragment
    }
  }
  ${imageFragment}
`
