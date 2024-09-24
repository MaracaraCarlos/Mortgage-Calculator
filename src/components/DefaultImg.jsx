import React from 'react'
import imagen from '../assets/images/illustration-empty.svg'

const DefaultImg = () => {
  return (
    <div className='empty_container'>
      <div className='img_container'>
        <img src={imagen} alt='empty' />
      </div>
      <h3>Results shown here</h3>
      <p>Complete the form and click "calculate repayment" to see what your monthly repayments would be.</p>
    </div>
  )
}

export default DefaultImg
