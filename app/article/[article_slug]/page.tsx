import { AuthorType } from '@/types/author'
import { StoryLeadType } from '@/types/lead'

import { redirect } from 'next/navigation'
import { STORY_PAGE } from '@/graphql/story-page'
import { getMetadata } from '@/server/get-metadata'
import { print } from 'graphql'
import GraphqlPageObject from '@/components/dev/graphql-page-object'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import StoryAuthors from '@/components/story/story-authors'
import StoryBody from '@/components/story/story-body'
import StoryHeader from '@/components/story/story-header'
import StoryLead from '@/components/story/story-lead'
import { query } from '@/lib/apollo/apollo-client'
import formatISODate from '@/lib/format-iso-date'
import richTextParser from '@/lib/rich-text-parser'

import styles from './story-page.module.scss'

export const dynamic = 'force-dynamic'

type Params = Promise<{ article_slug: string }>

export default async function StoryPage({ params }: { params: Params }) {
  const { article_slug } = await params

  if (!article_slug) {
    redirect('/')
  }

  const articleSlug = `/article/${article_slug}`

  const { data: metadata } = await getMetadata()

  // Convert query to a string and format it by removing \n and extra spaces
  const fullQuery = print(STORY_PAGE).replace(/\s+/g, ' ').trim()

  const { data } = await query({
    query: STORY_PAGE,
    variables: {
      path: articleSlug,
    },
  })

  const storyLead: StoryLeadType = data?.StoryPage?.storyLead?.[0] || undefined
  const storyBody: string | undefined = richTextParser(
    data?.StoryPage?.storyBody || [],
  )
  const storyAuthors: AuthorType[] = data?.StoryPage?.authors

  let datePublished: string | undefined = data?.StoryPage?.datePublishedISO
  let dateModified: string | undefined = data?.StoryPage?.dateModifiedISO

  if (datePublished) {
    datePublished = formatISODate({ date: datePublished })
  }

  if (dateModified) {
    dateModified = formatISODate({ date: dateModified })
  }

  return (
    <>
      <Header
        metadata={metadata}
        searchAction={data?.StoryPage?.searchAction}
      />

      <StoryHeader
        section={{
          text: data?.StoryPage?.primarySection,
          href: '#',
        }}
        title={data?.StoryPage?.title}
      />

      <main className={`content-width ${styles.main}`}>
        {/* left column */}
        <div>
          {storyLead && <StoryLead lead={storyLead} />}

          <div className={styles.storyBodyContainer}>
            {storyAuthors && (
              <StoryAuthors
                authors={storyAuthors}
                dateModified={dateModified}
                datePublished={datePublished}
              />
            )}
            {storyBody && <StoryBody storyBody={storyBody} />}
          </div>
        </div>
        {/* end left column */}
      </main>

      <GraphqlPageObject
        pageType="Story Page (Article)"
        pageSlug={articleSlug}
        pageData={data}
        fullQuery={fullQuery}
      />

      <Footer metadata={metadata} />
    </>
  )
}
