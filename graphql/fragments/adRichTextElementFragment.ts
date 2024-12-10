import gql from 'graphql-tag'

import { googleDfPAdModuleFragment } from './googleDfPAdModuleFragment'
import { nativoAdFragment } from './nativoAdFragment'

export const adRichTextElementFragment = gql`
  fragment adRichTextElementFragment on AdRichTextElement {
    __typename
    ad {
      ...nativoAdFragment
      ...googleDfPAdModuleFragment
    }
  }
  ${nativoAdFragment}
  ${googleDfPAdModuleFragment}
`
