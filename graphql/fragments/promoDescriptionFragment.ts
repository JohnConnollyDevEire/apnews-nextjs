import gql from 'graphql-tag'

export const promoDescriptionFragment = gql`
  fragment promoDescriptionFragment on PromoDescription {
    event
    year
  }
`
