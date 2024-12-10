import { ListType } from '@/types/list'
import { PromoType } from '@/types/promo'

import Link from 'next/link'
import { DynamicModuleRenderer } from '@/components/published/dynamic-module-renderer'
import LinkHelper from '@/lib/link-helper'

import styles from './list-e.module.scss'

export default function ListE(props: ListType) {
  return (
    <div className={styles.listE}>
      <div className={styles.leftColumn}>
        <h3 className={styles.listTitle}>
          <LinkHelper
            text={props.title}
            url={props.ctaUrl}
            target={props.ctaTarget}
          />
        </h3>
        <div className={styles.listDescription}>
          <LinkHelper
            text={props.description}
            url={props.ctaUrl}
            target={props.ctaTarget}
          />
        </div>

        <div>
          <hr className={styles.listDivider} />

          <div className={styles.moreCoverage}>MORE COVERAGE</div>

          {props.items.map((item: PromoType, index: number) => {
            if (item.title && item.url) {
              if (item.url) {
                return (
                  <div
                    className={
                      styles.childPromoTitle + ' ' + styles.childPromoLink
                    }
                    key={index}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </div>
                )
              } else {
                return (
                  <div className={styles.childPromoTitle} key={index}>
                    {item.title}
                  </div>
                )
              }
            }
          })}
        </div>
      </div>

      <div className={styles.rightColumn}>
        {props.moduleMediaLeadV2 && (
          <DynamicModuleRenderer
            module={props.moduleMediaLeadV2}
            url={props.ctaUrl}
            target={props.ctaTarget}
          />
        )}
      </div>
    </div>
  )
}
