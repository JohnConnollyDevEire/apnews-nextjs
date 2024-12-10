import 'modern-normalize/modern-normalize.css'
import '@/sass/globals.scss'

import { disableFragmentWarnings } from 'graphql-tag'
import { apSemiCondensedFont as font } from '@/lib/fonts'

import { PageProvider } from '@/providers/page-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  disableFragmentWarnings()

  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <PageProvider>{children}</PageProvider>
      </body>
    </html>
  )
}
