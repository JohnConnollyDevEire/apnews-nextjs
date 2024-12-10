import type { MetadataType } from '@/types/metadata'

import { Search } from 'lucide-react'
import { apSemiCondensedFont } from '@/lib/fonts'

import { usePage } from '@/providers/page-provider'

import HamburgerNavigationItem from './hamburger-navigation-item'
import styles from './hamburger-navigation.module.scss'

export default function HamburgerNavigation({
  metadata,
  searchAction,
}: {
  metadata?: MetadataType
  searchAction?: string
}) {
  const { menuOpen, setMenuOpen } = usePage()
  const navItems = metadata?.navigation?.[0]?.items || []

  if (!menuOpen) {
    return null
  }

  return (
    <div id="HamburgerNavigation" className={styles.hamburgerNavigation}>
      <div id="HamburgerNavigation-content" className={styles.content}>
        {/* Mobile only keyword search */}
        <div className={`${styles.searchForm} lg-hidden`}>
          <form
            // action={searchAction} // TODO: Remove after completing menu
            action="#"
            method="GET"
          >
            <button type="submit">
              <Search size={20} />
            </button>
            <input
              className="unset-all"
              type="search"
              placeholder="KEYWORD SEARCH"
            />
          </form>
        </div>

        <nav
          id="HamburgerNavigation-navigation"
          className={`${apSemiCondensedFont.className}`}
        >
          {navItems.map((item, index) => (
            <HamburgerNavigationItem
              item={item}
              key={`${item.href}-${index}`}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}
