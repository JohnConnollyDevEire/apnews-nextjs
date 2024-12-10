'use client'

import { Search } from 'lucide-react'

import { usePage } from '@/providers/page-provider'

import styles from './search-bar.module.scss'

export default function SearchBar({ searchAction }: { searchAction?: string }) {
  const { searchOpen } = usePage()

  if (!searchOpen) {
    return null
  }

  return (
    <div className={styles.searchBar}>
      <form
        className={styles.searchForm}
        action={searchAction}
        noValidate
        autoComplete="off"
      >
        <label>
          <input
            placeholder="Keyword Search..."
            type="text"
            name="q"
            required
            maxLength={650}
          />
          <span className="sr-only">Search Query</span>
        </label>
        <button type="submit">
          <Search />
          <span className="sr-only">Submit Search</span>
        </button>
      </form>
    </div>
  )
}
