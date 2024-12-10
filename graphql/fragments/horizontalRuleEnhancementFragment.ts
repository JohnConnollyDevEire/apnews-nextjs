import gql from 'graphql-tag'

export const horizontalRuleEnhancementFragment = gql`
  fragment horizontalRuleEnhancementFragment on HorizontalRule {
    __typename
    markup
  }
`
