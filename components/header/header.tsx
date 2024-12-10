'use client'

import type { MetadataType } from '@/types/metadata'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import HamburgerNavigation from '@/components/navigation/hamburger-navigation.'
import TopNavigation from '@/components/navigation/top-navigation'
import SearchBar from '@/components/search/search-bar'

import { usePage } from '@/providers/page-provider'

import styles from './header.module.scss'

export default function Header({
  metadata,
  searchAction,
}: {
  metadata?: MetadataType
  searchAction?: string
}) {
  const {
    menuOpen,
    setMenuOpen,
    searchOpen,
    setSearchOpen,
    dropdownMenuOpen,
    setDropdownMenuOpen,
  } = usePage()

  return (
    <div className={styles.header}>
      <div className={`content-width ${styles.content}`}>
        <Link href="/" className="hidden lg-block">
          <Image
            src="https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg"
            alt="AP News Logo"
            width={47.52}
            height={55}
            className="h-full"
          />
        </Link>

        {/* Menu Button */}
        <button
          className={`${styles.headerBtn} hidden lg-block`}
          onClick={() => {
            if (typeof setSearchOpen === 'function' && searchOpen) {
              setSearchOpen(false)
            }

            if (typeof setDropdownMenuOpen === 'function' && dropdownMenuOpen) {
              setDropdownMenuOpen(false)
            }

            if (typeof setMenuOpen === 'function') {
              setMenuOpen(!menuOpen)
            }
          }}
        >
          {!menuOpen && <Menu />}
          {menuOpen && <X />}
        </button>
        {/* End Menu Button */}

        {/* Mobile Logo */}
        <Link href="/" className="lg-hidden">
          <Image
            src="https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg"
            alt="AP News Logo"
            width={52}
            height={60}
            className="lg-hidden"
          />
        </Link>
        {/* End Mobile Logo */}

        <TopNavigation items={metadata?.navigation?.[0]?.items || []} />

        {/* Search Button */}
        <button
          className={styles.searchBtn}
          onClick={() => {
            if (typeof setMenuOpen === 'function' && menuOpen) {
              setMenuOpen(false)
            }
            if (typeof setDropdownMenuOpen === 'function' && dropdownMenuOpen) {
              setDropdownMenuOpen(false)
            }
            if (typeof setSearchOpen === 'function') {
              setSearchOpen(!searchOpen)
            }
          }}
        >
          {!searchOpen && <Search />}
          {searchOpen && <X />}
        </button>
        {/* End Search Button */}
      </div>

      <HamburgerNavigation searchAction={searchAction} metadata={metadata} />

      <SearchBar searchAction={searchAction} />
    </div>
  )
}
