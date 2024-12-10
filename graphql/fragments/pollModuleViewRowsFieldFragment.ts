import gql from 'graphql-tag'

import { pollModuleFragment } from './pollModuleFragment'

export const pollModuleViewRowsFieldFragment = gql`
  fragment pollModuleViewRowsFieldFragment on PollModuleViewRowsField {
    ... on PollModuleRow {
      ...pollModuleRowFragment
    }
  }
  ${pollModuleFragment}
`
