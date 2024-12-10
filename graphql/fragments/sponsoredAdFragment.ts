import gql from 'graphql-tag'

import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { imageFragment } from './imageFragment'
import { nativoAdFragment } from './nativoAdFragment'

export const sponsoredAdFragment = gql`
  fragment sponsoredAdFragment on SponsoredAd {
    description
    id
    typeId
    url
    sponsorCode
    serveAsAd
    target
    ad {
      ...googleDfPAdModuleFragment
      ...nativoAdFragment
    }
    media {
      ...imageFragment
    }
    altMedia {
      ...imageFragment
    }
  }
  ${googleDfPAdModuleFragment}
  ${nativoAdFragment}
  ${imageFragment}
`
