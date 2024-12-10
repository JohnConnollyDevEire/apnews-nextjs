import { HOMEPAGE } from '@/graphql/homepage'
import { print } from 'graphql'

import { query } from '@/lib/apollo/apollo-client'

export const dynamic = 'force-dynamic'

export default async function GraphQLTestPage() {
  // Convert query to a string and format it by removing \n and extra spaces
  const fullQuery = print(HOMEPAGE).replace(/\s+/g, ' ').trim()

  const { data } = await query({
    query: HOMEPAGE,
    variables: {
      path: '/',
    },
  })

  console.log('Home data result', data)

  return (
    <div className="p-8">
      <h2 className="font-bold">Server Side GraphQL (Homepage query)</h2>

      <div className="mt-4 grid grid-cols-2 gap-10">
        <pre className="whitespace-pre-wrap break-all">
          {JSON.stringify(data, null, 2)}
        </pre>
        <code>
          <pre className="whitespace-pre-wrap break-all">{fullQuery}</pre>
        </code>
      </div>
    </div>
  )
}
