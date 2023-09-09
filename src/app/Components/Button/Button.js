import React from 'react'

const Button = ({customClass,onClick,text}) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button