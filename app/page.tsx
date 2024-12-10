import { HOMEPAGE } from '@/graphql/homepage'
import { getMetadata } from '@/server/get-metadata'
import { print } from 'graphql'
import GraphqlPageObject from '@/components/dev/graphql-page-object'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { DynamicModuleRenderer } from '@/components/published/dynamic-module-renderer'
import { query } from '@/lib/apollo/apollo-client'

import styles from './homepage.module.scss'

export const dynamic = 'force-dynamic'

export default async function Home() {
  // Convert query to a string and format it by removing \n and extra spaces
  const fullQuery = print(HOMEPAGE).replace(/\s+/g, ' ').trim()

  const { data } = await query({
    query: HOMEPAGE,
    variables: {
      path: '/',
    },
  })

  const { data: metadata } = await getMetadata()

  const pageContent = data?.Screen?.main || []

  return (
    <>
      <Header metadata={metadata} searchAction={data?.Page?.searchAction} />

      <main className={`content-width ${styles.main}`}>
        {pageContent.map((module: Record<string, any>, index: number) => (
          <DynamicModuleRenderer key={module?.id || index} module={module} />
        ))}
      </main>

      <GraphqlPageObject
        pageType="Homepage"
        pageSlug="/"
        pageData={data}
        fullQuery={fullQuery}
      />

      <Footer metadata={metadata} />
    </>
  )
}
