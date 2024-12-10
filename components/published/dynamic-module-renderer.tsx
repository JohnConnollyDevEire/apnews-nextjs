import React, { Suspense } from 'react'

import { componentRegistry } from './component-registry'

interface DynamicModuleRendererProps {
  module?: any // Ideally, replace `any` with the actual type of `module` if you know it
  [key: string]: any // Represents additional arbitrary props
}

const DynamicModuleRenderer: React.FC<DynamicModuleRendererProps> = ({
  module,
  ...props
}) => {
  let Component

  if (module?.__typename === 'ColumnContainer') {
    Component = componentRegistry?.[module?.style] || false
  } else if (module?.__typename === 'PageListModule') {
    Component = componentRegistry?.[module?.mobileListModuleStyle] || false
  } else {
    Component = componentRegistry?.[module?.__typename] || false
  }

  if (!Component) {
    console.warn(`No component found for typename: ${module.__typename}`)
    return null
  }

  return (
    // TODO: Remove this loading fallback once all components are implemented
    <Suspense fallback={<div>Loading component for {module.__typename}</div>}>
      <Component {...module} {...props} />
    </Suspense>
  )
}

export { DynamicModuleRenderer }
