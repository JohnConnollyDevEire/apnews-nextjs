'use client'

import { apFont } from '@/lib/fonts'

import styles from './story-body.module.scss'

export default function StoryBody({ storyBody }: { storyBody?: string }) {
  if (!storyBody) {
    return null
  }

  return (
    <div className={`${apFont.className} ${styles.storyBody}`}>
      {storyBody && (
        <div
          dangerouslySetInnerHTML={{
            __html: storyBody.replace(/\s+/g, ' ').trim(),
          }}
        />
      )}
    </div>
  )
}
