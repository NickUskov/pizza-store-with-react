import React from 'react'
import classnames from 'classnames'

export default function Button({outline, cart, children,add, onClick}) {
  return (
    <button
      onClick={() => onClick ? onClick() : ''}
      className={classnames('button', {
      'button--outline': outline,
      'button--cart': cart,
      'button--add': add,
    })}>
      {children}
    </button>
  )
}