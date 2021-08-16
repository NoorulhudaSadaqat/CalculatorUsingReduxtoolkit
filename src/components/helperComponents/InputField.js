import React from 'react'
import { useSelector } from 'react-redux'
import './InputTextField.css'

const InputField = () => {
  const result = useSelector((state) => state.result.value)
  return <input className="inputClass" value={result} type="text"></input>
}

export default InputField
