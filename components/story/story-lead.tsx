import { StoryLeadType } from '@/types/lead'

import EntriesImage from '@/components/image/entries-image'
import RawText from '@/components/text/raw-text'
import { apSemiCondensedFont } from '@/lib/fonts'

import styles from './story-lead.module.scss'

export default function StoryLead({ lead }: { lead: StoryLeadType }) {
  const captionExists = lead?.caption?.[0]

  if (
    lead.__typename === 'Figure' &&
    lead.image?.entries &&
    lead.image?.entries?.length > 0
  ) {
    return (
      <div className={styles.storyLeadFigure}>
        {lead.image && (
          <EntriesImage
            entries={lead.image.entries}
            alt={lead?.alt as string}
          />
        )}

        {captionExists && (
          <RawText
            className={`${apSemiCondensedFont.className} ${styles.caption}`}
            as="figcaption"
            text={lead.caption?.[0] as string}
          />
        )}
      </div>
    )
    // End if lead === Figure
  } else {
    return null
  }
}
