import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => {
  return(
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const squareRoot = () => setCounter(counter*counter)

  const minusByOne = () => setCounter(counter - 1)


  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick = {setToZero} text = 'zero'/>
      <Button handleClick = {minusByOne} text = '-'/>
      <Button handleClick = {increaseByOne} text = '+'/>
      <Button handleClick = {squareRoot} text = '^'/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
