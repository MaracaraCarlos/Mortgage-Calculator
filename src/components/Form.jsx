import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DefaultImg from './DefaultImg'
import calcIcon from '../assets/images/icon-calculator.svg'
import Results from './Results'

const Form = () => {
  const [datos, setDatos] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setDatos(data)
  }

  const clearAll = () => {
    setDatos({})
    reset({
      amount: '',
      term: '',
      interest: '',
      type: ''
    })
  }
  return (
    <div className='main_container'>
      <div className='left_container'>
        <div className='title_container'>
          <h3>Mortgage Calculator</h3>
          <button onClick={clearAll}>Clear All</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input_first_row'>
            <label htmlFor='amount'>Mortgage Amount</label>
            <div className='amount_input'>
              <input
                id='amount'
                className={errors.amount ? 'error_input' : 'amount'}
                type='number'
                {...register('amount', { required: true, min: 1000, max: 2000000 })}
              />
              <span>£</span>
            </div>
            {
              errors.amount?.type === 'required' && <p className='error_p'>This field is required</p>
            }
            {
              errors.amount?.type === 'max' && <p className='error_p'>max: 2000000</p>
            }
            {
              errors.amount?.type === 'min' && <p className='error_p'>min: 1000</p>
            }
          </div>
          <div className='input_second_row'>
            <div className='term_container'>
              <label htmlFor='term'>Mortgage Term</label>
              <div className='inputs'>
                <input
                  id='term'
                  className={errors.term ? 'error_term' : 'term'}
                  type='number'
                  {...register('term', { required: true, min: 5, max: 40 })}
                />
                <span>years</span>
              </div>
              {
                errors.term && <p className='error_p'>This field is required</p>
              }
            </div>
            <div className='interest_container'>
              <label htmlFor='interest'>Interest Rate</label>
              <div className='inputs'>
                <input
                  id='interest'
                  className={errors.interest ? 'error_interest' : 'interest_input'}
                  type='number'
                  step='0.01'
                  {...register('interest', { required: true, min: 1, max: 11 })}
                />
                <span>%</span>
              </div>
              {
                errors.interest && <p className='error_p'>This field is required</p>
              }
            </div>
          </div>
          <div className='input_third_row'>
            <p>Mortgage Type</p>
            <div className='radio_container'>
              <input
                type='radio'
                id='repayment'
                name='type'
                value='repayment'
                {...register('type', { required: true })}
              />
              <label htmlFor='repayment'>Repayment</label>
            </div>
            <div className='radio_container'>
              <input
                type='radio'
                id='interest_only'
                name='type'
                value='interest_only'
                {...register('type', { required: true })}
              />
              <label htmlFor='interest_only'>Interest Only</label>
            </div>
            {
              errors.type && <p className='error_p'>This field is required</p>
            }
          </div>
          <button className='submit_btn' type='submit'><img src={calcIcon} alt='calculator icon' />Calculate Repayments</button>
        </form>
      </div>
      <div className='right_container'>
        {
          !datos.type && (
            <DefaultImg />
          )
        }
        {
          datos.type && (
            <Results datos={datos} />
          )
        }
      </div>
    </div>
  )
}

export default Form
