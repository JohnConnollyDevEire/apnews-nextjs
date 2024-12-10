import gql from 'graphql-tag'

export const richTextModuleFragment = gql`
  fragment richTextModuleFragment on RichTextModule {
    __typename
    id
    title
    typeId
  }
`
