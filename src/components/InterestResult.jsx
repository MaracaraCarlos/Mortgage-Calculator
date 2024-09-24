import React from 'react'
import interestOnlyMonth from '../helpers/interestOnly'

const InterestResult = ({ datos }) => {
  return (
    <div className='interest_container'>
      <p>your monthly repayment</p>
      <h2>£{Intl.NumberFormat('en-UK').format(interestOnlyMonth(Number(datos.amount), Number(datos.interest), Number(datos.term)).toFixed(2))}</h2>
      <p>total you will reapy over the term</p>
      <h4>£{Intl.NumberFormat('en-UK').format((interestOnlyMonth(Number(datos.amount), Number(datos.interest), Number(datos.term)) * 12 * Number(datos.term)).toFixed(2))}</h4>
    </div>
  )
}

export default InterestResult
