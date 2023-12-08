import './styles.css'
import IMask from 'imask'

import { CardType } from '../../types/types'
import { useEffect, useState } from 'react'

export function Card() {
  const [renderElements, setRenderElements] = useState('0')

  useEffect(() => {
    console.log(timeOut)
  }, [renderElements])

  const timeOut = setTimeout(() => {
    setRenderElements('1')
  }, 500)

  function setCardType(type: string) {
    const colors = {
      visa: ['#436D99', '#2D57F2'],
      mastercard: ['#DF6F29', '#C69347'],
      default: ['black', 'gray']
    }

    const ccBgColor01 = document.querySelector(
      '.cc-bg svg > g g:nth-child(1) path'
    )
    const ccBgColor02 = document.querySelector(
      '.cc-bg svg > g g:nth-child(2) path'
    )
    const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img')

    ccBgColor01?.setAttribute('fill', (colors as unknown as CardType)[type][0])
    ccBgColor02?.setAttribute('fill', (colors as unknown as CardType)[type][1])
    ccLogo?.setAttribute('src', `cc-${type}.svg`)
  }

  const securityCode = document.querySelector(
    '#security-number'
  ) as HTMLInputElement

  const securityCodePattern = {
    mask: '0000'
  }

  const expirationDate = document.querySelector(
    '#expiration-date'
  ) as HTMLInputElement
  const expirationDatePattern = {
    mask: 'MM{/}YY',
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2),
        to: String(new Date().getFullYear() + 10).slice(2)
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
      }
    }
  }

  const cardNumber = document.querySelector('#card-number') as HTMLInputElement
  const cardNumberPattern = {
    mask: [
      {
        mask: '0000 0000 0000 0000',
        regex: /^4d{0,15}/,
        cardtype: 'visa'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: /(^5[1-5]d{0,2}|^22[2-9]d|^2[3-7]d{0,2})d{0,12}/,
        cardtype: 'mastercard'
      },
      {
        mask: '0000 0000 0000 0000',
        cardtype: 'default'
      }
    ],
    dispatch: function (appended: any, dynamicMasked: any) {
      const number = (dynamicMasked.value + appended).replace(/D/g, '')
      const foundMask = dynamicMasked.compiledMasks.find(function (item: any) {
        return number.match(item.regex)
      })
      return foundMask
    }
  }

  const cardHolder = document.querySelector('#card-holder') as HTMLInputElement

  if (
    securityCode === null ||
    expirationDate === null ||
    cardNumber === null ||
    cardHolder === null
  ) {
  } else {
    const securityCodeMasked = IMask(securityCode, securityCodePattern)
    const expirationDateMasked = IMask(expirationDate, expirationDatePattern)
    const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

    cardHolder.addEventListener('input', () => {
      const ccHolder = document.querySelector(
        '.cc-holder .value'
      ) as HTMLElement

      ccHolder.innerText =
        cardHolder.value.length === 0 ? 'CARD HOLDER NAME' : cardHolder.value
    })

    securityCodeMasked.on('accept', () => {
      updateSecurityCode(securityCodeMasked.value)

      function updateSecurityCode(code: string) {
        const ccSecurity = document.querySelector(
          '.cc-security .value'
        ) as HTMLElement
        ccSecurity.innerText = code.length === 0 ? '123' : code
      }
    })

    cardNumberMasked.on('accept', () => {
      const currentMask = cardNumberMasked.masked.currentMask

      const cardType = (currentMask as any)['cardtype']

      setCardType(cardType)
      updateCardNumber(cardNumberMasked.value)
    })

    function updateCardNumber(number: string) {
      const ccNumber = document.querySelector('.cc-number') as HTMLElement
      ccNumber.innerText = number.length === 0 ? '1234 5678 9012 3456' : number
    }

    expirationDateMasked.on('accept', () => {
      updateDate(expirationDateMasked.value)
    })

    function updateDate(date: string) {
      const ccDate = document.querySelector(
        '.cc-expiration .value'
      ) as HTMLElement
      ccDate.innerText = date.length === 0 ? '00/00' : date
    }
  }

  return (
    <div className="card-mask">
      <section className="cc">
        <div className="cc-bg">
          <svg
            width="360"
            height="230"
            viewBox="0 0 360 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_3_2547"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="360"
              height="230"
            >
              <rect width="360" height="230" rx="15.4011" fill="#16084C" />
            </mask>
            <g mask="url(#mask0_3_2547)">
              <g filter="url(#filter0_f_3_2547)">
                <path
                  d="M451.518 -135.506C473.881 -89.3531 414.166 -13.4917 318.142 33.9349C222.118 81.3615 126.147 82.3939 103.784 36.2409C81.4215 -9.91221 141.136 -85.7735 237.16 -133.2C333.184 -180.627 429.156 -181.659 451.518 -135.506Z"
                  fill="black"
                />
              </g>
              <g filter="url(#filter1_f_3_2547)">
                <path
                  d="M399.134 -169.756C421.497 -123.603 361.783 -47.742 265.758 -0.315356C169.734 47.1113 73.7629 48.1437 51.4003 1.99062C29.0377 -44.1624 88.7521 -120.024 184.776 -167.45C280.8 -214.877 376.772 -215.909 399.134 -169.756Z"
                  fill="gray"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_3_2547"
                x="43.2629"
                y="-225.286"
                width="468.777"
                height="351.306"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="27.9144"
                  result="effect1_foregroundBlur_3_2547"
                />
              </filter>
              <filter
                id="filter1_f_3_2547"
                x="-9.12087"
                y="-259.536"
                width="468.777"
                height="351.306"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="27.9144"
                  result="effect1_foregroundBlur_3_2547"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="cc-logo">
          <span>
            <img src="./cc-icon.svg" alt="contactless  card icon" />
          </span>
          <span>
            <img src="./cc-default.svg" alt="selected card icon" />
          </span>
        </div>

        <div className="cc-info">
          <div className="cc-number">1234 5678 9012 3456</div>

          <div className="cc-holder">
            <div className="label">Name</div>
            <div className="value">CARD HOLDER NAME</div>
          </div>

          <div className="cc-extra">
            <div className="cc-expiration">
              <div className="label">Expiration</div>
              <div className="value">00/00</div>
            </div>
            <div className="cc-security">
              <div className="label">CVC</div>
              <div className="value">123</div>
            </div>
            <img src="./cc-chip.svg" alt="credit card chip icon" />
          </div>
        </div>
      </section>
    </div>
  )
}
