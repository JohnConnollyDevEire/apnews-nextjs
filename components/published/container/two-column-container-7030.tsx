import { ContainerType } from '@/types/container'

import { DynamicModuleRenderer } from '@/components/published/dynamic-module-renderer'

import styles from './two-column-container-7030.module.scss'

export default function TwoColumnContainer7030(props: ContainerType) {
  if (props.columns && props.columns.length > 0) {
    const leftColumn = [...props.columns].splice(0, 2)
    const rightColumn = [...props.columns].splice(2)

    return (
      <>
        <div className={styles.container7030}>
          <div className={styles.column}>
            {leftColumn.map((item: any, index: number) => {
              return (
                <DynamicModuleRenderer
                  key={`${props.typeId || props.id}-${index}`}
                  module={item}
                />
              )
            })}
          </div>
          <div className={styles.column}>
            {rightColumn.map((item: any, index: number) => {
              return (
                <DynamicModuleRenderer
                  key={`${props.typeId || props.id}-${index}`}
                  module={item}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return null
}
