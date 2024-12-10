import { CarouselType } from './carousel'
import type { PromoType } from './promo'

export type ListType = {
  __typename: 'PageListModule'
  title?: string | null
  description?: string | null
  hideDate: boolean
  typeId: string
  anchorId?: string | null
  ctaGraphqlPath?: string | null
  ctaGraphqlQueryType?: string | null
  ctaTarget?: string | null
  ctaUrl?: string | null
  ctaType?: string | null
  listType?: string | null
  hideStylePrompt: boolean
  subListTitle?: string | null
  hideDescription: boolean
  hideSubTitle: boolean
  items: PromoType[]
  moduleMediaLeadV2?: CarouselType
}
