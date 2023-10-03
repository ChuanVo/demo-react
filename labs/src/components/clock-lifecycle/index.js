import { useState, useEffect } from "react"
import style from './style.module.css'

function FuncClock() {
   const [date, setDate] = useState(new Date())
   const [test, setTest] = useState('')

  useEffect(() => {
    console.log('useEffect with empty dependencies')
  })

  useEffect(() => {
    console.log('useEffect with []')
  }, [])

  // useEffect(() => {
  //   console.log('useEffect with [date]')

  //   return () => {
  //     console.log('=>>> unmounting <<<=')
  //   }
  // }, [test, date])

  useEffect(() => {
    // code effect
    console.log('useEffect')
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // clean up
    return function () {
      console.log('Cleanup')

      clearInterval(intervalId)
    }
  }, [date]) // empty, [], [date]


 function handleClick() {
  setDate(new Date())
 }

  
  console.log('Render', style)
  return(
    <div className={style.clock}>
      <button onClick={handleClick}>Generate time</button>
      <h1>Hello, I am Clock</h1>
      <h2>Now is {date.toLocaleTimeString()}.</h2>
    </div>
  )

}

export default FuncClock