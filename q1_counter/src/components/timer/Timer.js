import { useState, useEffect } from "react";

function Timer({ countup, pause, reset }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
      if (reset){
          setCount(0)
      }
      else {
        if (! pause) {
            // if (countup){
            //     clearInterval(timerID2);
            //     const timerId = setTimeout(() => {
            //         setCount((count) => count + 1);
            //       }, 1000);
            // }
            // else if (! countup){
            //     clearInterval(timerID);
            //     const timerId2 = setTimeout(() => {
            //         setCount((count) => count - 1);
            //       }, 1000);
            // }
            const timerId = setTimeout(() => {
                if (countup){
                    setCount((count) => count + 1);
                }
                else if (! countup) {
                    setCount((count) => count - 1);
                }
            }, 1000);
            // clearInterval(timerId);
        }
      }
  });


  return <div>{count}</div>;
}

export default Timer;
