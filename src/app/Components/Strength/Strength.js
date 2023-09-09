import React from 'react'
import strengthStyle from './Strength.module.css'

const Strength = ({ password }) => {

  const getPasswordStrength = () => {

    const passLength = password.length;

    if(passLength < 1){
      return ""
    }else if (passLength <4){
      return "Very Weak"
    }else if(passLength <8){
      return "Poor"
    }else if(passLength <12){
      return "Medium"
    }else if(passLength <16){
      return "Strong"
    }else {
      return "Very Strong"
    }
  }

  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />


  return (
    <div className={strengthStyle.strength}>
      <p>Strength :</p>
      <span>{passwordStrength}</span>
    </div>
  )
}

export default Strength