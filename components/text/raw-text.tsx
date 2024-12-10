import React from 'react'

interface RawTextProps {
  text: string
  as?: keyof JSX.IntrinsicElements
  [key: string]: any
}

export default function RawText({
  text,
  as: Tag = 'span',
  ...props
}: RawTextProps) {
  let decodedString

  try {
    decodedString = JSON.parse(`"${text}"`)
  } catch (error) {
    console.error(error)
  }

  if (!decodedString) {
    return null
  }

  return <Tag dangerouslySetInnerHTML={{ __html: decodedString }} {...props} />
}
