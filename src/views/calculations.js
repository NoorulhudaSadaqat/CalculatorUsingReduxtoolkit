import React from 'react'
import { useSelector } from 'react-redux'

const Calculations = () => {
  const calculations = useSelector((state) => state.calculations.value)
  const rowsCalculations = []
  for (let i = 0; i < calculations.length; i++) {
    rowsCalculations.push(<p>{calculations[i]}</p>)
  }
  return <div>{rowsCalculations}</div>
}

export default Calculations
