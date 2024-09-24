function payMonthly (amount, interest, years) {
  const n = years * 12
  const r = (interest / 100) / 12
  const p = amount * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1))

  return (
    p
  )
}

export default payMonthly
