import Button from "../button/Button";
import s from './buttons.module.css';

function Buttons({ countupState, pauseState, onStart, onReset, onCount }) {
    return (
        <div className={s.buttonsContainer}>
            <Button 
                text={"Reset"} 
                onClick={onReset}
            />
            <Button 
                text={pauseState ? "Start" : "Pause"} 
                onClick={onStart}
            />
            <Button 
                text={countupState ? "Down Counting" : "Up Counting"} 
                onClick={onCount}
            />

        </div>

    );
  }
  
  export default Buttons;