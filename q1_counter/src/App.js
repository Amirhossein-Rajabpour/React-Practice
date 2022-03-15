import Counter from "./components/counter/Counter";
import Buttons from "./components/buttons/Buttons";
import { useState } from "react";


function App() {
  const [countup, setCountup] = useState(true)
  const [pause, setPause] = useState(true) 
  const [reset, setReset] = useState(false)

  const startPauseTimer = () => {
    setPause(! pause)
    setReset(false)
  }

  const countUpDown = () => {
    if (! pause) {
      startPauseTimer()
    }

    setCountup(! countup)
    setReset(false)
  }

  const resetTimer = () => {
    setPause(true)
    setCountup(true)
    setReset(true)
  }

  return (
    <div className="container">
      <Counter 
        countup={countup}
        pause={pause}
        reset={reset}
      />
      <Buttons 
        countupState={countup} 
        pauseState={pause}
        onStart={startPauseTimer}
        onCount={countUpDown}
        onReset={resetTimer}
        />

    </div>
    
  );
}

export default App;
