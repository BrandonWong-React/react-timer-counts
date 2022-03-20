import React from 'react';
import Timer from './Timer';
import './style.css';

export default function TimerList({
  timerList,
  onClickButton,
  onClickTimer,
  onRemoveTimer,
  setTimer,
  destroyTimer,
}) {
  return (
    <div>
      <button onClick={onClickButton}>Create a new timer</button>
      {timerList.map((timer, index) => {
        return (
          <Timer
            key={index}
            timer={timer}
            onClickTimer={() => onClickTimer(index)}
            onRemoveTimer={() => onRemoveTimer(index)}
            setTimer={() => setTimer(index)}
            destroyTimer={() => destroyTimer(index)}
          />
        );
      })}
    </div>
  );
}
