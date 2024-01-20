import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces";
import { reducerCounter } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";


const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 9,
  changes: 9
}


const CounterReducer = () => {
	
  const [state, dispatch] = useReducer(reducerCounter, INITIAL_STATE)

  const handleReset = () => {
    dispatch(doReset())
  }

  const increaseBy = (value : number) => {
    dispatch(doIncreaseBy(value))
  }

  return (
    <>
      <h1>Counter Reducer Segmentado </h1>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>

      <button onClick={handleReset}> 
        Reset
      </button>
      <button onClick={() => increaseBy(1)}> 
        +1
      </button>
      <button onClick={() => increaseBy(5)}> 
        +5
      </button>
      <button onClick={() => increaseBy(10)}> 
        +10
      </button>
    </>
  )
}

export default CounterReducer
