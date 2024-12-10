export type LeaderboardAdType = {
  __typename: 'LeaderboardAd'
  ad: AdType[]
  headerStickyPreTimeoutTimeMs?: number
  headerStickyTimeMs?: number
}

export type AdType = {
  __typename: string
  classAttribute?: string | null
  enableSticky?: boolean
  gamTargetingKey?: string | null
  gamTargetingValue?: string | null
}
