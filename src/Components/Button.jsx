import React from 'react'
import classnames from 'classnames'

export default function Button({outline, cart, children}) {
  return (
    <button className={classnames('button', {
      'button--outline': outline,
      'button--cart': cart,
    })}>
      {children}
    </button>
  )
}