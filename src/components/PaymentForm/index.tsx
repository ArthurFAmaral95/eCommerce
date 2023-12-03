import './styles.css'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { GetPaymentData } from '../../types/types'

const PaymentFormSchema = z.object({
  paymentMethod: z.string().min(1, 'Please choose a payment method'),
  cardNumber: z.string().min(1, 'Required field'),
  cardHolder: z.string().min(1, 'Required field'),
  expirationDate: z.string().min(1, 'Required field'),
  securityNumber: z.string().min(1, 'Required field')
})

export type PaymentFormProps = z.infer<typeof PaymentFormSchema>

export function PaymentForm(props: GetPaymentData) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PaymentFormProps>({ resolver: zodResolver(PaymentFormSchema) })

  function sendPaymentData(data: PaymentFormProps) {
    const paymentData = {
      paymentMethod: data.paymentMethod,
      cardNumber: data.cardNumber,
      cardHolder: data.cardHolder,
      expirationDate: data.expirationDate,
      securityNumber: data.securityNumber
    }

    props.getPaymentData(paymentData)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit(sendPaymentData)}>
      <fieldset id="card-type">
        <div className="input-container">
          <div className="input-text">
            <legend>Payment method</legend>
            {errors.paymentMethod && (
              <span>{errors.paymentMethod.message}</span>
            )}
          </div>
          <div className="input-values">
            <div className="input-value">
              <label htmlFor="debit">Debit</label>
              <input
                type="radio"
                id="debit"
                value="debit"
                {...register('paymentMethod')}
              />
            </div>
            <div className="input-value">
              <label htmlFor="credit">Credit</label>
              <input
                type="radio"
                id="credit"
                value="credit"
                {...register('paymentMethod')}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset id="card-info">
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="card-number">Card number</label>
            {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
          </div>
          <input type="text" id="card-number" {...register('cardNumber')} />
        </div>
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="card-holder">Card holder</label>
            {errors.cardHolder && <span>{errors.cardHolder.message}</span>}
          </div>
          <input type="text" id="card-holder" {...register('cardHolder')} />
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="expiration-date">Expiration date</label>
              {errors.expirationDate && (
                <span>{errors.expirationDate.message}</span>
              )}
            </div>
            <input
              type="text"
              id="expiration-date"
              {...register('expirationDate')}
            />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="security-number">Security number</label>
              {errors.securityNumber && (
                <span>{errors.securityNumber.message}</span>
              )}
            </div>
            <input
              type="text"
              id="security-number"
              {...register('securityNumber')}
            />
          </div>
        </div>
      </fieldset>
    </form>
  )
}
