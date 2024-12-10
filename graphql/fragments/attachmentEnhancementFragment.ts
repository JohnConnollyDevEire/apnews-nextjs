import gql from 'graphql-tag'

export const attachmentEnhancementFragment = gql`
  fragment attachmentEnhancementFragment on AttachmentEnhancement {
    __typename
    description
    fileName
    fileSize
    fileTypeDisplayName
    iconType
    mimeType
    target
    title
    url
  }
`
