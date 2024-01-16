import { useEffect, useState, useRef} from "react"
import { gsap } from "gsap";

interface CounterProps {
  initialValue?: number
}

const MAXIMUN_COUNT = 10;

const CounterEffect = ( { initialValue = 5}: CounterProps ) => {
	
  const [counter, setCounter] = useState(initialValue)

  const counterElement= useRef<HTMLHeadingElement>(null)


  const handleClick = () => {
    setCounter(Math.min(counter + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if(counter < MAXIMUN_COUNT) return
    console.log('Se llegó al valor maximo')
    const timeLine = gsap.timeline();
    timeLine.to

    timeLine.to(counterElement.current, {y: -10, duration: 0.2, ease: "bounce.in" })
            .to(counterElement.current, {y: -0, duration: 0.8, ease: "bounce.out" })

  }, [counter])
  

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}> 
        +1
      </button>
    </>
  )
}

export default CounterEffect
