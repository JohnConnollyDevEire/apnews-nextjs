import type { TextType } from './text'

export type NavigationType = {
  __typename: string
  items: NavigationItemType[]
}

export type NavigationItemType = {
  __typename: string
  text?: TextType[]
  href?: string
  target?: string | null
  items: NavigationLinkType[]
}

export type NavigationLinkType = {
  __typename: string
  href?: string
  text?: TextType[]
  target?: string | null
  description?: string | null
}
