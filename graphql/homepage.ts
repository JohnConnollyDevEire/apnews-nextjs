import gql from 'graphql-tag'

import { navigationFragment } from './fragments/navigationFragment'
import { pageListModuleFragment } from './fragments/pageListModuleFragment'
import { screenViewMainFieldFragment } from './fragments/screenViewMainFieldFragment'

export const HOMEPAGE = gql`
  query HomepageQuery(
    $path: String
    $locationKey: String
    $week: String
    $voter: String
  ) {
    Screen(path: $path) {
      canonicalLink
      contentId
      description
      pageDisplayDate
      feedLink
      headerStickyTimeMs
      id
      jsonLinkedData
      language
      main(locationKey: $locationKey, week: $week, voter: $voter) {
        ...screenViewMainFieldFragment
      }
      trending {
        ...pageListModuleFragment
      }
      manifestLink
      searchAction
      title
      typeId
      navigation {
        ...navigationFragment
      }
    }
  }
  ${screenViewMainFieldFragment}
  ${pageListModuleFragment}
  ${navigationFragment}
`
