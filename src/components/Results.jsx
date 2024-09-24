import React from 'react'
import payMonthly from '../helpers/repayment'
import interestOnlyMonth from '../helpers/interestOnly'

const Results = ({ datos }) => {
  return (
    <div className='results_container'>
      <h3>Your results</h3>
      <p className='results_paragraph'>
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.
      </p>
      <div className='number_section'>
        <div className='monthly_number'>
          <p>Your monthly repayments</p>
          {
            datos.type === 'repayment' && (
              <h1>£{Intl.NumberFormat('en-UK').format(payMonthly(Number(datos.amount), Number(datos.interest), Number(datos.term)).toFixed(2))}</h1>
            )
          }
          {
            datos.type === 'interest_only' && (
              <h1>£{Intl.NumberFormat('en-UK').format(interestOnlyMonth(Number(datos.amount), Number(datos.interest), Number(datos.term)).toFixed(2))}</h1>
            )
          }
        </div>
        <div className='total_number'>
          <p>Total you'll repay over the term</p>
          {
            datos.type === 'repayment' && (
              <h3>£{Intl.NumberFormat('en-UK').format((payMonthly(Number(datos.amount), Number(datos.interest), Number(datos.term)) * 12 * Number(datos.term)).toFixed(2))}</h3>
            )
          }
          {
            datos.type === 'interest_only' && (
              <h3>£{Intl.NumberFormat('en-UK').format((interestOnlyMonth(Number(datos.amount), Number(datos.interest), Number(datos.term)) * 12 * Number(datos.term)).toFixed(2))}</h3>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Results
