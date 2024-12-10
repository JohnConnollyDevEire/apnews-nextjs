const debounce = (fn: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout

  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, delay)
  }
}

export { debounce }
