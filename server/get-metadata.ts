import { Route } from 'next'

import { MetadataType } from '@/types/metadata'

export async function getMetadata() {
  try {
    const response = await fetch(process.env.METADATA_ENDPOINT as Route)
    const data = await response.json()

    return {
      success: true,
      data: (data?.data?.Page as MetadataType) || null,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
