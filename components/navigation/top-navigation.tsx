'use client'

import { useEffect, useRef } from 'react'
import { NavigationItemType } from '@/types/navigation'

import Link from 'next/link'
import { ChevronDown, Ellipsis } from 'lucide-react'
import { useImmer } from 'use-immer'
import RawText from '@/components/text/raw-text'
import { debounce } from '@/lib/debounce'
import { apSemiCondensedFont } from '@/lib/fonts'

import { usePage } from '@/providers/page-provider'

import styles from './top-navigation.module.scss'

export default function TopNavigation({
  items,
}: {
  items: NavigationItemType[]
}) {
  const { setMenuOpen, dropdownMenuOpen, setDropdownMenuOpen } = usePage()

  const navRef = useRef<HTMLDivElement>(null)

  const [visibleItems, setVisibleItems] = useImmer<NavigationItemType[]>(items)
  const [overflowItems, setOverflowItems] = useImmer<NavigationItemType[]>([])
  const [isCalculating, setIsCalculating] = useImmer(false)

  // useEffect(() => {
  //   console.log('dropdownMenuOpen changed', dropdownMenuOpen)
  // }, [dropdownMenuOpen])

  useEffect(() => {
    const updateOverflowItems = () => {
      setMenuOpen && setMenuOpen(false)
      setDropdownMenuOpen && setDropdownMenuOpen(false)

      const nav = navRef.current

      if (!nav) {
        return
      }

      // Reset visible and overflow items before recalculating (so calculations are accurate)
      setVisibleItems(items)
      setOverflowItems([])

      // Temporarily hide items during recalculation
      setIsCalculating(true)

      // Allow the DOM to stabilize before recalculating (next frame)
      requestAnimationFrame(() => {
        const navWidth = nav.offsetWidth

        // This gives adequate space for the dropdown button
        const availableWidth = navWidth - 60

        const children = Array.from(nav.children) as HTMLElement[]

        let cumulativeWidth = 0
        const newVisibleItems: NavigationItemType[] = []
        const newOverflowItems: NavigationItemType[] = []

        for (let i = 0; i < items.length; i++) {
          const child = children[i]
          const itemWidth = child?.offsetWidth || 0

          // Check if item fits within available width
          if (cumulativeWidth + itemWidth > availableWidth) {
            newOverflowItems.push(items[i])
          } else {
            cumulativeWidth += itemWidth
            newVisibleItems.push(items[i])
          }
        }

        setVisibleItems(newVisibleItems)
        setOverflowItems(newOverflowItems)
        setIsCalculating(false)
      })
    } // End updateOverflowItems()

    // Initial calculation
    updateOverflowItems()

    const debouncedUpdate = debounce(updateOverflowItems, 150)
    window.addEventListener('resize', debouncedUpdate)

    return () => {
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [items])
  // End menu items calculation useEffect

  return (
    <nav
      ref={navRef}
      className={`${styles.topNavigation} ${apSemiCondensedFont.className} ${isCalculating ? styles.isCalculating : ''}`}
      data-dropdown-menu-open={dropdownMenuOpen}
    >
      {visibleItems.map((item, index) => {
        if (!item?.text?.[0]?.items[0] || !item.href) {
          return null
        }

        return (
          <Link
            className={`${styles.topNavButtonLink}`}
            key={`${item.href}-${index}`}
            href={item.href}
          >
            <RawText text={item.text?.[0]?.items[0]} />
          </Link>
        )
      })}

      {overflowItems.length > 0 && (
        <div className={styles.dropdownWrapper}>
          <button
            className={styles.topNavButtonLink}
            onClick={() =>
              setDropdownMenuOpen && setDropdownMenuOpen(!dropdownMenuOpen)
            }
          >
            <Ellipsis size={20} />
          </button>

          {dropdownMenuOpen && (
            <div id="DropdownMenu" className={styles.dropdownMenu}>
              {overflowItems.map((item, index) => {
                if (!item?.text?.[0]?.items[0] || !item.href) {
                  return null
                }

                return (
                  <Link
                    className={styles.dropdownMenuItem}
                    key={`${item.href}-overflow-${index}`}
                    href={item.href}
                  >
                    <RawText text={item.text?.[0]?.items[0]} />
                    {item.items && item.items.length > 0 && (
                      <ChevronDown size={16} />
                    )}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
