import type { LeaderboardAdType } from './ads'
import type { ImageType } from './media-image'
import type { NavigationType } from './navigation'
import type { PagePromoModuleType } from './page-promo-module'
import type { TextType } from './text'

export type MetadataType = {
  trending: any[]
  footerLogo: {
    __typename: string
    image: ImageType[]
  }[]
  footerContent: PagePromoModuleType[]
  footerNavigation: {
    navigation: NavigationType[]
  }
  disclaimer: TextType[]
  leaderboardAdMarkup?: string | null
  leaderboardAd?: LeaderboardAdType[]
  navigation: NavigationType[]
}
