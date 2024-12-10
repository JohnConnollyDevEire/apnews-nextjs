import { ListType } from '@/types/list'

import EntriesImage from '@/components/image/entries-image'

import styles from './list-right-rail-a.module.scss'

export default function ListRightRailA(props: ListType) {
  if (!props.items || props.items?.length === 0) {
    return null
  }

  return (
    <div className={styles.listRightRailA}>
      {props.items.map((item, index) => {
        const promoImageEntries = item.media?.[0]?.image?.entries

        return (
          <div key={index}>
            {promoImageEntries && <EntriesImage entries={promoImageEntries} />}
            <div>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}
