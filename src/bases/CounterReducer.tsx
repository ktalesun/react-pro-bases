import { useReducer } from "react"


interface CounterState {
  counter: number
  previous: number
  changes: number
}

type CounterAction = 
| { type: 'increaseBy', payload: {value: number}} 
| { type: 'reset' }

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 9,
  changes: 9
}

const reducerCounter = (state: CounterState, action: CounterAction): CounterState => {
  
  const {counter, changes} = state;
  
  switch (action.type) {
    
    case 'reset': 
      return {
        counter: 0,
        previous: 0,
        changes: 0
      }
    
    case 'increaseBy':

      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1
      }
        
    default:
      return state;
  
  }
}

const CounterReducer = () => {
	
  const [state, dispatch] = useReducer(reducerCounter, INITIAL_STATE)

  const handleReset = () => {
    dispatch({type:'reset'})
  }

  const increaseBy = (value : number) => {
    dispatch({
      type: 'increaseBy',
      payload: {value}
    })
  }

  return (
    <>
      <h1>Counter Reducer </h1>
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
