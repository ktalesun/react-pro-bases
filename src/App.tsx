import Counter from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy"
import CounterEffect from "./bases/CounterEffect"
import CounterHook from "./bases/CounterHook"
import CounterReducer from "./bases/CounterReducer"

export const App = () => {

  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue = {5} />
      <CounterBy initialValue={ 10} />
      <CounterEffect initialValue={5} />
      <CounterHook initialValue={6} />
      <CounterReducer initialValue={1} />
    </>
  )
}

