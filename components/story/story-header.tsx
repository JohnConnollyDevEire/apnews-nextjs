import Link from 'next/link'

import styles from './story-header.module.scss'

declare type SectionType = {
  text?: string
  href?: string
}

export default function StoryHeader({
  title,
  section,
}: {
  title: string
  section?: SectionType
}) {
  return (
    <div className={`${styles.storyHeader}`}>
      <div className={`content-width`}>
        {section?.text && (
          <div className={styles.eyebrow}>
            <Link href={section.href || '#'}>{section.text}</Link>
          </div>
        )}
        <h1>{title}</h1>
      </div>
    </div>
  )
}
