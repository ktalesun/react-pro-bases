import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap";

interface Props {
  initialValue?: number,
  maxCount?: number
}

export const useCounter = ({initialValue = 0, maxCount = 1}: Props) => {

  const [counter, setCounter] = useState(initialValue)

  const elementToAnimate = useRef<HTMLHeadingElement>(null)

  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter(Math.min(counter + 1, maxCount))
  }

  useLayoutEffect(() => {

    if(!elementToAnimate.current) return;

    timeLine.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: "ease.out" })
            .to(elementToAnimate.current, {y: 0, duration: 1, ease: "bounce.out" })
            .pause()

  }, [])

  useEffect(() => {
    // if(counter < maxCount) return
    // console.log('Se llegó al valor maximo')
    timeLine.current.play(0);
    
  }, [counter])


  return {
    counter,
    handleClick,
    elementToAnimate
  }

}