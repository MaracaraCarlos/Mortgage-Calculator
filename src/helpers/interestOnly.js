function interestOnlyMonth (amount, interest, years) {
  const a = (interest / 100) * years
  const b = amount * a
  const c = b / (years * 12)
  return (
    c
  )
}

export default interestOnlyMonth
