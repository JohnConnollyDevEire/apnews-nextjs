import React from 'react'

import { MetadataType } from '@/types/metadata'

export default function Footer({ metadata }: { metadata?: MetadataType }) {
  return (
    <div>
      <h2>Footer</h2>

      {metadata && <pre>{JSON.stringify(metadata)}</pre>}
    </div>
  )
}
