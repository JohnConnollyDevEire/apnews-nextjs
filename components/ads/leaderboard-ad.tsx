import { LeaderboardAdType } from '@/types/ads'

export default function LeaderboardAd({
  leaderboardAdMarkup,
  leaderboardAd,
}: {
  leaderboardAdMarkup: string | null
  leaderboardAd: LeaderboardAdType[]
}) {
  if (leaderboardAdMarkup && leaderboardAd) {
    console.log('log for eslint use of variables')
  }

  return (
    <div>
      <h2>Leaderboard Ad</h2>
    </div>
  )
}
