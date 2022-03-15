import React from 'react';
import Keypad from '../keypad';
import Screen from '../screen';
import s from './calculator.module.css';
import { useState, useEffect } from "react"

export default function Calculator() {
  const [operand1, setOperand1] = useState('--')
  const [operand2, setOperand2] = useState('--')
  const [operation, setOperation] = useState('--')
  const [button, setButton] = useState()

  const calculate = (operand1, operand2, operation) => {
    console.log('before')
    operand1 = Number(operand1)
    operand2 = Number(operand2)
    console.log('==>', operand1, operation ,operand2)
    if (operation === '+') {
      var result = operand1 + operand2
      console.log('result is', result)
      return result
    }
    else if (operation === '-') {
      var result = operand1 - operand2
      console.log('result is', result)
      return result
    }
    else if (operation === 'x') {
      var result = operand1 * operand2
      console.log('result is', result)
      return result
    }
    else if (operation === '÷') {
      var result = operand1 / operand2
      console.log('result is', result)
      return result
    }
    else if (operation === '%') {
      var result = operand1 % operand2
      console.log('result is', result)
      return result
    }

  }

  const handleButtonClick = (button) => {
      setButton(button)

      if (button === '=') {
        console.log('=')
        const result = calculate(operand1, operand2, operation)
        setButton(result)
        // change operand types to '--'
        setOperand1('--')
        setOperand2('--')
        setOperation('--')
      }
    
      else if (button === '+/-') {
        // TODO: styling
        if (operand1 !== '--' && operand2 === '--') {
          setOperand1(Number(operand1))
          if (operand1 > 0){
            setButton('-' + operand1)
          }
          else {
            setOperand1(operand1.toString()) 
            setButton(operand1.slice(1,))
            setOperand1(Number(operand1))
          }
          setOperand1(-1 * operand1)
        }
        else if (operand1 !== '--' && operand2 !== '--') {
          setOperand2(Number(operand2))
          if (operand2 > 0){
            setButton('-' + operand2)
          }
          else {
            setOperand2(operand2.toString()) 
            setButton(operand2.slice(1,))
            setOperand2(Number(operand2))
          }
          setOperand2(-1 * operand2)
        }
      }
    
      else if (button === '%' || button === '÷' || button === 'x' || button === '-' || button === '+') {
        setOperation(button)
        console.log('operation: ', operation)
      }
    
      else if (button === '.') {
        if (operand1 !== '--' && operand2 === '--' ) {
          if (!operand1.includes('.')){
            const newop1 = operand1 + button
            setOperand1(newop1)
            setButton(newop1)
          }
          else {
            setOperand1(operand1)
            setButton(operand1)
          }
        }

        else if (operand1 !== '--' && operand2 !== '--' ) {
          if (!operand2.includes('.')){
            const newop2 = operand2 + button
            setOperand2(newop2)
            setButton(newop2)
          }
          else {
            setOperand2(operand2)
            setButton(operand2)
          }
        }

      }
    
      else if (button === 'C') {
        console.log('clear')
        setOperand1('--')
        setOperand2('--')
        setOperation('--')
        setButton()
      }
    
      else if (!isNaN(button)) {
        if (operand1 === '--') {
          setOperand1(button)
        }
        else if (operation === '--' && operand2 === '--') {
          const newop1 = operand1 + button
          setOperand1(newop1)
          setButton(newop1)
        }
        else if (operation !== '--' && operand2 === '--') {
          const newop = button
          setOperand2(newop)
          setButton(newop)
        }
        else if (operand1 !== '--' && operand2 !== '--' && operation !== '--') {
          const newop2 = operand2 + button
          setOperand2(newop2)
          setButton(newop2)
        }
      }

  };


  return (
    <div className={s.calculator}>
      <Screen text={button}/>
      <Keypad onButtonClick={handleButtonClick}/>
    </div>
  );
}
