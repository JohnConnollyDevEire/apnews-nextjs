'use client'

import { AuthorType } from '@/types/author'

import Link from 'next/link'
import { Share } from 'lucide-react'
import { apVarFont } from '@/lib/fonts'

import styles from './story-authors.module.scss'

export default function StoryAuthors({
  authors,
  datePublished,
  dateModified,
}: {
  authors?: AuthorType[]
  datePublished?: string
  dateModified?: string
}) {
  if (!authors) {
    return null
  }

  return (
    <div className={`${apVarFont.className} ${styles.storyAuthors}`}>
      <div>
        <div className={styles.authorNames}>
          BY{' '}
          {authors.map((author, index) => (
            <Link
              key={index}
              href={author.url || '#'}
              rel="noopener noreferrer"
            >
              {author.name}
            </Link>
          ))}
        </div>
        <div className={styles.metaData}>
          {!dateModified && <span>Published {datePublished}</span>}
          {dateModified && <span>Updated {dateModified}</span>}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.shareBtn}>
          Share <Share size={13} />
        </button>
      </div>
    </div>
  )
}
