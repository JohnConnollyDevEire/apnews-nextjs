import gql from 'graphql-tag'

import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { nativoAdFragment } from './nativoAdFragment'
import { pollModuleDropDownFragment } from './pollModuleDropDownFragment'
import { pollModuleRowFragment } from './pollModuleRowFragment'

export const pollModuleFragment = gql`
  fragment pollModuleFragment on PollModule {
    __typename
    id
    pollTitle
    pollSubtitle
    typeId
    mostRecentWeek
    organizationName
    othersReceivingVotesValues
    pollReleaseDate
    pollsterDropDown {
      ...pollModuleDropDownFragment
    }
    rows {
      ...googleDfPAdModuleFragment
      ...nativoAdFragment
      ...pollModuleRowFragment
    }
    weeklyDropDown {
      ...pollModuleDropDownFragment
    }
  }
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
  ${pollModuleDropDownFragment}
  ${pollModuleRowFragment}
`
