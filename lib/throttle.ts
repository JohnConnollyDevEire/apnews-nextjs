const throttle = (fn: () => void, limit: number) => {
  let lastCall = 0
  return () => {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      fn()
    }
  }
}

export { throttle }
