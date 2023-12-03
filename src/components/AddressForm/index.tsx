import './styles.css'

export function AddressForm() {
  return (
    <form
      id="address-form"
      onSubmit={e => {
        e.preventDefault()
        console.log('enviou')
      }}
    >
      <fieldset id="zip-code">
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="zip-code">Zip Code</label>
          </div>
          <input type="text" id="zip-code" inputMode="numeric" />
        </div>
      </fieldset>
      <fieldset id="street">
        <div className="top">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="street">Street</label>
            </div>
            <input type="text" id="street" />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="number">Number</label>
            </div>
            <input type="text" id="number" />
          </div>
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="complement">Complement</label>
            </div>
            <input type="text" id="complement" />
          </div>
        </div>
      </fieldset>
      <fieldset id="city-state-country">
        <div className="top">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="city">City</label>
            </div>
            <input type="text" id="city" />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="state">State</label>
            </div>
            <input type="text" id="state" />
          </div>
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="country">Country</label>
            </div>
            <input type="text" id="country" />
          </div>
        </div>
      </fieldset>
    </form>
  )
}
