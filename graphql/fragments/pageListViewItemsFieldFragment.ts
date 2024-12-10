import gql from 'graphql-tag'

import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { nativoAdFragment } from './nativoAdFragment'
import { pagePromoFragment } from './pagePromoFragment'

export const pageListViewItemsFieldFragment = gql`
  fragment pageListViewItemsFieldFragment on PageListViewItemsField {
    ...pagePromoFragment
    ...googleDfPAdModuleFragment
    ...nativoAdFragment
  }
  ${pagePromoFragment}
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
`
