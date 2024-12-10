import gql from 'graphql-tag'

export const todayInHistoryFragment = gql`
  fragment todayInHistoryFragment on TodayInHistory {
    anchorId
    count
    description
    id
    nextPage
    pageCount
    pageNumber
    previousPage
    query
    title
    typeId
  }
`
