import React from 'react'
import CheckboxStyle from './Checkbox.module.css'

const Checkbox = ({title,onChange,state}) => {
  return (
    <div className={CheckboxStyle.checkbox}>
          <label htmlFor='CheckBox'>{title}</label>
          <input type="checkbox" onChange={onChange} checked={state} id='CheckBox'/>
    </div>
  )
}

export default Checkbox