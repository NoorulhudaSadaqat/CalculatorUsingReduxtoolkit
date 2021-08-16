function twoValueCalculation(InputString) {
  let result
  let firstInputValue = '0'
  let secondinputvalue = '0'
  let operator
  let firstValueFilled = false
  let firstOperatorFilled = false
  let secondValueFilled = false
  try {
    let indexValue
    for (let count = 0; count < InputString.length; count++) {
      indexValue = InputString.charAt(count)
      if ((indexValue >= '0' && indexValue <= '9') || indexValue === '.') {
        if (!firstValueFilled) {
          firstInputValue = firstInputValue + indexValue
        } else if (firstValueFilled) {
          secondinputvalue = secondinputvalue + indexValue
          secondValueFilled = true
        }
      } else {
        firstValueFilled = true
        if (firstOperatorFilled && secondValueFilled) {
          firstInputValue = calculation(
            firstInputValue,
            secondinputvalue,
            operator,
          )
          secondinputvalue = '0'
          firstOperatorFilled = false
          secondValueFilled = false
        } else if (firstOperatorFilled) {
          return 'wrong expression'
        }
        operator = indexValue
        firstOperatorFilled = true
      }
    }
  } catch {}
  result = calculation(firstInputValue, secondinputvalue, operator)
  return result
}
//console.log(twoValueCalculation('2.3+34-45'))
function calculation(firstValue, secondValue, operator) {
  console.log(
    'first Value : ' + firstValue,
    'second value : ' + secondValue,
    'operator : ' + operator,
  )
  firstValue = parseInt(firstValue)
  secondValue = parseInt(secondValue)
  let result = 0
  if (operator === '+') result = firstValue + secondValue
  else if (operator === '-') result = firstValue - secondValue
  else if (operator === '*') result = firstValue * secondValue
  else if (operator === '/' && secondValue === 0) result = 0
  else if (operator === '/') result = firstValue / secondValue
  else if (operator === '%') result = firstValue % secondValue
  else if (operator === 'ˆ') result = Math.pow(firstValue, secondValue)
  result = result.toString()
  return result
}
//twoValueCalculation('2-3')
function singleValueCalculation(currentValue, InputString) {
  let result
  if (InputString === 'sin') {
    result = Math.sin(currentValue)
  } else if (InputString === 'cos') {
    result = Math.cos(currentValue)
  } else if (InputString === 'clear') {
    result = '0'
  } else if (InputString === 'tan') {
    result = Math.tan(currentValue)
  } else if (InputString === 'xSquare') {
    result = Math.pow(currentValue, 2)
  } else if (InputString === 'xCube') {
    result = Math.pow(currentValue, 3)
  } else if (InputString === 'log') {
    result = Math.log(currentValue)
  } else if (InputString === 'backS') {
    result = currentValue.substr(0, currentValue.length - 1)
  } else if (InputString === 'squareRoot') {
    result = Math.pow(currentValue, 1 / 2)
  }
  return result
}

export { twoValueCalculation, singleValueCalculation }
