import gql from 'graphql-tag'

import { pageListModuleFragment } from './pageListModuleFragment'
import { pagePromoFragment } from './pagePromoFragment'

export const searchResultsModule = gql`
  fragment searchResultsModule on SearchResults {
    anchorId
    count
    id
    nextPage
    pageCount
    pageNumber
    previousPage
    query
    typeId
    title
    description
    initialContent {
      ...pageListModuleFragment
    }
    items {
      ...pagePromoFragment
    }
  }
  ${pageListModuleFragment}
  ${pagePromoFragment}
`
