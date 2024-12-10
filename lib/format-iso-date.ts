export default function formatISODate({
  date,
  locale = 'en-US',
  options,
}: {
  date: string
  locale?: string
  options?: Intl.DateTimeFormatOptions
}): string {
  const dateObject = new Date(date)

  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  options = {
    ...defaultOptions,
    ...options,
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObject)
}
