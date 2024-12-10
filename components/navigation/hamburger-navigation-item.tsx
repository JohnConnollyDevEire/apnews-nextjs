import { NavigationItemType } from '@/types/navigation'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useImmer } from 'use-immer'
import RawText from '@/components/text/raw-text'

import styles from './hamburger-navigation-item.module.scss'

export default function HamburgerNavigationItem({
  item,
  ...props
}: {
  item: NavigationItemType
  [key: string]: any
}) {
  const [subNavOpen, setSubNavOpen] = useImmer(false)

  if (!item?.text?.[0]?.items[0] || !item.href) {
    return null
  }

  const hasSubNav = item?.items?.length > 0

  return (
    <div
      className={styles.hamburgerNavigationItem}
      data-has-subnav={hasSubNav}
      {...props}
    >
      <Link href={item.href}>
        <RawText text={item.text?.[0]?.items[0]} />
      </Link>

      {hasSubNav && (
        <button>
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}
