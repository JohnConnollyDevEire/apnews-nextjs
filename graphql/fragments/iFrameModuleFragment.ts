import gql from 'graphql-tag'

export const iFrameModuleFragment = gql`
  fragment iFrameModuleFragment on IframeModule {
    __typename
    anchorId
    aspectRatio
    embedCaption
    height
    iframeScalable
    name
    sandbox
    style
    url
    width
  }
`
