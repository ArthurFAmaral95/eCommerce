import './styles.css'

import { GetAddressData } from '../../types/types'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const AddressFormSchema = z.object({
  zipCode: z.string().min(1, 'Requierd field.').trim(),
  street: z.string().min(1, 'Required field.').trim(),
  number: z.string().min(1, 'Required field.').trim(),
  complement: z.string().trim(),
  city: z.string().min(1, 'Required field.').trim(),
  state: z.string().min(1, 'Required field.').toUpperCase().trim(),
  country: z.string().min(1, 'Required field.').trim()
})

export type AddressFormProps = z.infer<typeof AddressFormSchema>

export function AddressForm(props: GetAddressData) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddressFormProps>({ resolver: zodResolver(AddressFormSchema) })

  function sendAddressData(data: AddressFormProps) {
    const addressData = {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      state: data.state,
      country: data.country
    }

    props.getAddressData(addressData)
  }

  return (
    <form id="address-form" onSubmit={handleSubmit(sendAddressData)}>
      <fieldset id="zip-code">
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="zip-code">Zip Code</label>
            {errors.zipCode && <span>{errors.zipCode.message}</span>}
          </div>
          <input
            type="text"
            id="zip-code"
            inputMode="numeric"
            {...register('zipCode')}
          />
        </div>
      </fieldset>
      <fieldset id="street">
        <div className="top">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="street">Street</label>
              {errors.street && <span>{errors.street.message}</span>}
            </div>
            <input type="text" id="street" {...register('street')} />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="number">Number</label>
              {errors.number && <span>{errors.number.message}</span>}
            </div>
            <input type="text" id="number" {...register('number')} />
          </div>
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="complement">Complement</label>
              {errors.complement && <span>{errors.complement.message}</span>}
            </div>
            <input type="text" id="complement" {...register('complement')} />
          </div>
        </div>
      </fieldset>
      <fieldset id="city-state-country">
        <div className="top">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="city">City</label>
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <input type="text" id="city" {...register('city')} />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="state">State</label>
              {errors.state && <span>{errors.state.message}</span>}
            </div>
            <input type="text" id="state" {...register('state')} />
          </div>
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="country">Country</label>
              {errors.country && <span>{errors.country.message}</span>}
            </div>
            <input type="text" id="country" {...register('country')} />
          </div>
        </div>
      </fieldset>
    </form>
  )
}
