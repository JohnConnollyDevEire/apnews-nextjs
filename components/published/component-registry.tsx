import React from 'react'

const containers = {
  '/container/TwoColumnContainer7030.hbs': React.lazy(
    () => import('@/components/published/container/two-column-container-7030'),
  ),
}

const lists = {
  PageListStandardE: React.lazy(
    () => import('@/components/published/list/list-e'),
  ),
  PageListStandardB: React.lazy(
    () => import('@/components/published/list/list-b'),
  ),
  PageListRightRailA: React.lazy(
    () => import('@/components/published/list/list-right-rail-a'),
  ),
}

const componentRegistry: Record<string, React.ComponentType<any>> = {
  Carousel: React.lazy(
    () => import('@/components/published/carousel/carousel'),
  ),
  ...containers,
  ...lists,
}

export { componentRegistry }
