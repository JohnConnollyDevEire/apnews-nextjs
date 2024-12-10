import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'

import possibleTypes from '@/lib/apollo/possible-types/possibleTypes.json'

// const customFetch = (
//   input: RequestInfo | URL,
//   init?: RequestInit | undefined,
// ) => {
//   // console.log('GraphQL Request:', init && init.body)
//   return fetch(input, init)
// }

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes,
    }),
    link: new HttpLink({
      // fetch: customFetch,
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: process.env.GRAPHQL_ENDPOINT,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
      fetchOptions: { cache: 'no-store' },
    }),
  })
})
