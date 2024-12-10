import gql from 'graphql-tag'

export const pollModuleDropDownFragment = gql`
  fragment pollModuleDropDownFragment on PollDropDown {
    displayText
    id
    organizationName
    parameter
    parameterValue
    pollReleaseDate
    typeId
  }
`
