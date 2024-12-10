export type ContainerType = {
  __typename: 'ColumnContainer'
  id: string
  typeId: string
  title?: string | null
  description?: string | null
  anchorId?: string | null
  style: string
  eyebrowTreatmentEnabled: boolean
  enableOverhang?: boolean | null
  columns: any[]
}
