import { ImageFigureEntryType } from './media-image'

export type HtmlStringType = {
  __typename: 'HtmlString'
  html?: string | null
}

export type LinkEnhancementType = {
  __typename: 'LinkEnhancement'
  contentId?: string | null
  href?: string | null
  target?: string | null
  body?: string[] | null
  graphqlPath?: string | null
  graphqlQueryType?: string | null
}

export type RichTextHeadingType = {
  __typename: 'RichTextHeading'
  htmlText?: string[] | null
}

export type ImageEnhancementType = {
  __typename: 'ImageEnhancement'
  item: {
    __typename: 'Figure'
    anchorId?: string | null
    id?: string | null
    caption?: string[] | null
    credit?: string[] | null
    typeId?: string | null
    image?: {
      __typename: 'Map'
      entries: ImageFigureEntryType[]
    }
  }[]
}

export type HtmlModuleEnhancementType = {
  __typename: 'HtmlModuleEnhancement'
  item: {
    __typename: 'HtmlModule'
    ampFallbackUrl?: string | null
    anchorId?: string | null
    embedCaption?: string | null
    rawHtml?: string | null
  }[]
}

export type InfoBoxEnhancementType = {
  __typename: 'Infobox'
  anchorId?: string | null
  plainText?: string | null
  items: RichTextContentType[]
}

export type IframeModuleEnhancementType = {
  __typename: 'IframeModuleEnhancement'
  item: {
    __typename: 'IframeModule'
    anchorId?: string | null
    aspectRatio?: string | null
    embedCaption?: string | null
    height?: string | null
    iframeScalable: boolean
    name?: string | null
    sandbox?: string | null
    style?: string | null
    url?: string | null
    width?: string | null
  }[]
}

export type RichTextContentType =
  | HtmlStringType
  | LinkEnhancementType
  | RichTextHeadingType
  | ImageEnhancementType
  | HtmlModuleEnhancementType
  | IframeModuleEnhancementType
  | InfoBoxEnhancementType
