import './styles.css'

export function PaymentForm() {
  return (
    <form id="payment-form">
      <fieldset id="card-type">
        <div className="input-container">
          <div className="input-text">
            <legend>Payment method</legend>
          </div>
          <div className="input-values">
            <div className="input-value">
              <label htmlFor="debit">Debit</label>
              <input type="radio" id="debit" value="debit" name="card" />
            </div>
            <div className="input-value">
              <label htmlFor="credit">Credit</label>
              <input type="radio" id="credit" value="credit" name="card" />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset id="card-info">
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="card-number">Card number</label>
          </div>
          <input type="text" id="card-number" />
        </div>
        <div className="input-container">
          <div className="input-text">
            <label htmlFor="card-holder">Card holder</label>
          </div>
          <input type="text" id="card-holder" />
        </div>
        <div className="bottom">
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="expiration-date">Expiration date</label>
            </div>
            <input type="text" id="expiration-date" />
          </div>
          <div className="input-container">
            <div className="input-text">
              <label htmlFor="security-number">Security number</label>
            </div>
            <input type="text" id="security-number" />
          </div>
        </div>
      </fieldset>
    </form>
  )
}
