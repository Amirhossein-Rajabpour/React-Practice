import Timer from "../timer/Timer";
import s from './counter.module.css';

function Counter({ countup, pause, reset }) {
  return (
    <header className={s.header}>
      <div>Counter:</div>
      <Timer 
        countup={countup} 
        pause={pause}
        reset={reset}
        />
    </header>
  );
}

export default Counter;