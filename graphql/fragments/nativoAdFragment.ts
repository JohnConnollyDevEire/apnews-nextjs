import gql from 'graphql-tag'

export const nativoAdFragment = gql`
  fragment nativoAdFragment on NativoAd {
    adModuleType
    enableSticky
    nativoClass
    sectionUrl
    androidSectionUrl
    iosSectionUrl
  }
`
