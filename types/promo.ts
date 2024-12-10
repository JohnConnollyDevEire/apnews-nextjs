import { MediaType } from './media-image'

export type PromoType = {
  __typename: 'PagePromo'
  title?: string | null
  description?: string | null
  id: string
  type?: string | null
  typeId: string
  url?: string | null
  authorUrl?: string | null
  category?: string | null
  categoryUrl?: string | null
  eyebrow?: string | null
  graphqlPath?: string | null
  graphqlQueryType?: string | null
  itemId?: string | null
  itemLookupName?: string | null
  itemMediaApiContentId?: string | null
  itemMediaApiItemId?: string | null
  itemWiresId?: string | null
  leadType?: string | null
  primaryMediaType?: string | null
  publishDate?: string | null
  publishDateStamp?: string | null
  target?: string | null
  media: MediaType[]

  // TODO: Update these any types to be more specific when they become known
  authorImage: any[]
  sponsored: any[]
}
