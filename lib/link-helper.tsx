import Link from 'next/link'

export default function LinkHelper({
  text,
  url,
  children,
  ...props
}: {
  text?: string | null
  url?: string | null
  children?: React.ReactNode
  [key: string]: any
}) {
  if (!url && !text && !children) {
    return null
  }

  if (url) {
    return (
      <Link href={url} {...props}>
        {children || text}
      </Link>
    )
  } else {
    return <span {...props}>{children || text}</span>
  }
}
