import React from 'react'
import Button from './helperComponents/Button'
import { useSelector, useDispatch } from 'react-redux'
import { setResult } from '../store/resultSlice'
import { addCalculations } from '../store/recentCalculationsSlice'
import { twoValueCalculation, singleValueCalculation } from '../calculation'

const Keypad = () => {
  const result = useSelector((state) => state.result.value)
  const dispatch = useDispatch()
  function setValue(value) {
    if (result === '0' || result === 'wrong expression') {
      dispatch(setResult(value))
    } else {
      const finalValue = result + value
      dispatch(setResult(finalValue))
    }
  }
  function setValueByOneValueCalculation(value) {
    const finalValue = singleValueCalculation(result, value)
    let calculation
    if (value !== 'clear')
      calculation = value + '(' + result + ') = ' + finalValue
    console.log(calculation)
    dispatch(addCalculations(calculation))
    dispatch(setResult(finalValue))
  }

  function setValueByTwoValueCalculation(value) {
    const finalValue = twoValueCalculation(result)
    const calculation = result + ' = ' + finalValue
    console.log(calculation)
    dispatch(addCalculations(calculation))
    dispatch(setResult(finalValue))
  }

  return (
    <div>
      <Button
        class="button"
        name="sin"
        text="Sin"
        setValue={setValueByOneValueCalculation}
      />

      <Button
        Class="button"
        name="cos"
        text="Cos"
        setValue={setValueByOneValueCalculation}
      />
      <Button
        Class="button"
        name="tan"
        text="Tan"
        setValue={setValueByOneValueCalculation}
      />
      <Button
        Class="button"
        name="clear"
        text="C"
        setValue={setValueByOneValueCalculation}
      />
      <br />

      <Button
        Class="button"
        name="xSquare"
        text="xˆ2"
        setValue={setValueByOneValueCalculation}
      />
      <Button
        Class="button"
        name="xCube"
        text="xˆ3"
        setValue={setValueByOneValueCalculation}
      />
      <Button
        Class="button"
        name="squareRoot"
        text="//"
        setValue={setValueByOneValueCalculation}
      />
      <Button
        Class="button"
        name="log"
        text="Log"
        setValue={setValueByOneValueCalculation}
      />
      <br />
      <Button Class="button" name="1" text="1" setValue={setValue} />
      <Button Class="button" name="2" text="2" setValue={setValue} />
      <Button Class="button" name="3" text="3" setValue={setValue} />
      <Button
        Class="button"
        name="backS"
        text="<"
        setValue={setValueByOneValueCalculation}
      />
      <br />
      <Button Class="button" name="4" text="4" setValue={setValue} />
      <Button Class="button" name="5" text="5" setValue={setValue} />
      <Button Class="button" name="6" text="6" setValue={setValue} />
      <Button Class="button" name="-" text="-" setValue={setValue} />
      <br />
      <Button Class="button" name="7" text="7" setValue={setValue} />
      <Button Class="button" name="8" text="8" setValue={setValue} />
      <Button Class="button" name="9" text="9" setValue={setValue} />
      <Button Class="button" name="/" text="/" setValue={setValue} />
      <br />
      <Button Class="button" name="." text="." setValue={setValue} />
      <Button Class="button" name="0" text="0" setValue={setValue} />
      <Button Class="button" name="*" text="*" setValue={setValue} />
      <Button Class="button" name="%" text="%" setValue={setValue} />
      <br />
      <Button
        Class="button"
        name="equal"
        text="="
        setValue={setValueByTwoValueCalculation}
      />
      <Button Class="button" name="+" text="+" setValue={setValue} />
      <Button Class="button" name="ˆ" text="ˆ" setValue={setValue} />
      <br />
    </div>
  )
}

export default Keypad
