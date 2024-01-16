import { useState } from "react"

interface CounterProps {
  initialValue?: number
}

interface CounterState {
  counter: number,
  clicks: number
}


export const CounterBy = ({initialValue = 0} : CounterProps) => {
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  })


  const handleClick = (value: number) => {
    setCounterState(({counter, clicks}) => ({
      counter: counter + value,
      clicks: clicks + 1
    }))
  }
  
  return (
    <>
      <h1>CounterBy : {counter} </h1>
      <h2>clicks: {clicks}</h2>
      <button onClick={() => handleClick(1)}> 
        +1
      </button>
      <button onClick={() => handleClick(5)}> 
        +5
      </button>
  </>
  )
}
