import { ListType } from '@/types/list'

import EntriesImage from '@/components/image/entries-image'
import LinkHelper from '@/lib/link-helper'

import styles from './list-b.module.scss'

export default function ListB(props: ListType) {
  if (!props.items || props.items?.length === 0) {
    return null
  }

  return (
    <div className={styles.listB}>
      {props.items.map((item, index) => {
        const promoImageEntries = item.media?.[0]?.image?.entries

        return (
          <div className={styles.promo} key={index}>
            {promoImageEntries && (
              <LinkHelper
                className={styles.promoImage}
                url={item.url}
                target={item.target}
              >
                <EntriesImage entries={promoImageEntries} />
              </LinkHelper>
            )}
            <div className={styles.promoTitle}>
              <LinkHelper
                text={item.title}
                url={item.url}
                target={item.target}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
