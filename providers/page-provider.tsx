'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react'

import { useImmer, type Updater } from 'use-immer'

interface PageContextType {
  menuOpen: boolean
  setMenuOpen: Updater<boolean> | undefined
  searchOpen: boolean
  setSearchOpen: Updater<boolean> | undefined
  dropdownMenuOpen: boolean
  setDropdownMenuOpen: Updater<boolean> | undefined
}

const PageContext = createContext<PageContextType>({
  menuOpen: false,
  setMenuOpen: undefined,
  searchOpen: false,
  setSearchOpen: undefined,
  dropdownMenuOpen: false,
  setDropdownMenuOpen: undefined,
})

export function PageProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useImmer(false)
  const [searchOpen, setSearchOpen] = useImmer(false)
  const [dropdownMenuOpen, setDropdownMenuOpen] = useImmer(false)
  const hamburgerDebounceRef = useRef<NodeJS.Timeout | null>(null)

  const setDebounceTimer = useCallback(() => {
    if (menuOpen) {
      hamburgerDebounceRef.current && clearTimeout(hamburgerDebounceRef.current)
      hamburgerDebounceRef.current = setTimeout(() => {
        setMenuOpen(false)
      }, 1500)
    }
  }, [menuOpen, hamburgerDebounceRef.current])

  // This sets the html attributes on the page when the menu or search open state changes
  useEffect(() => {
    if (document) {
      const html = document.querySelector('html')

      if (html) {
        html.setAttribute('data-menu-open', menuOpen.toString())
        html.setAttribute('data-search-open', searchOpen.toString())
      }
    }
  }, [menuOpen, searchOpen])

  // If the escape key is pressed, close the menu, and search box
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
        setDropdownMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // If the user clicks outside the menu content area, when the menu is open => close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && event.target instanceof HTMLElement) {
        if (!event.target.closest('#HamburgerNavigation-content')) {
          setMenuOpen(false)
        }
      }

      if (dropdownMenuOpen && event.target instanceof HTMLElement) {
        if (!event.target.closest('#DropdownMenu')) {
          setDropdownMenuOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen, dropdownMenuOpen])

  // Mouse enter/leave handling for the menu content
  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // return // TODO: Remove after completing menu
      if (
        menuOpen &&
        event.target instanceof HTMLElement &&
        event.target.id === 'HamburgerNavigation-content'
      ) {
        setDebounceTimer()
      }
    }

    // Cancel the timer if the user re-enters the menu content area
    const handleMouseEnter = () => {
      if (hamburgerDebounceRef.current) {
        clearTimeout(hamburgerDebounceRef.current)
        hamburgerDebounceRef.current = null
      }
    }

    const contentElement = document.getElementById(
      'HamburgerNavigation-content',
    )

    if (contentElement) {
      contentElement.addEventListener('mouseleave', handleMouseLeave)
      contentElement.addEventListener('mouseenter', handleMouseEnter)
    }

    // If the menu is open and there is no debounce timer, start a timer (menu button was clicked)
    if (menuOpen && !hamburgerDebounceRef.current) {
      setDebounceTimer()
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('mouseleave', handleMouseLeave)
        contentElement.removeEventListener('mouseenter', handleMouseEnter)
      }
      hamburgerDebounceRef.current && clearTimeout(hamburgerDebounceRef.current)
      hamburgerDebounceRef.current = null
    }
  }, [menuOpen])

  return (
    <PageContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        searchOpen,
        setSearchOpen,
        dropdownMenuOpen,
        setDropdownMenuOpen,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error('usePage must be used within an PageProvider')
  }

  return context
}
