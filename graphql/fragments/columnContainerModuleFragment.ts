import gql from 'graphql-tag'

import { columnContainerFragment } from './columnContainerFragment'

export const columnContainerModuleFragment = gql`
  fragment columnContainerModuleFragment on ColumnContainer {
    id
    typeId
    title
    description
    anchorId
    style
    eyebrowTreatmentEnabled
    enableOverhang
    columns {
      ...columnContainerFragment
    }
  }
  ${columnContainerFragment}
`
