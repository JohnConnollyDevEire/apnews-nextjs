import type { MediaType } from './media-image'
import type { TextType } from './text'

export type PagePromoModuleType = {
  __typename: string
  description: TextType[]
  title: string | null
  target: string | null
  url: string | null
  media: MediaType[]
  anchorId?: string | null
}
