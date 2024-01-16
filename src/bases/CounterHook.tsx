
import { useCounter } from "../hooks/useCounter";

interface CounterProps {
  initialValue?: number
}


const CounterHook = ( { initialValue = 5}: CounterProps ) => {
	
  const {counter, elementToAnimate, handleClick} = useCounter({initialValue, maxCount: 20})
  
  return (
    <>
      <h1>CounterHook</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}> 
        +1
      </button>
    </>
  )
}

export default CounterHook
