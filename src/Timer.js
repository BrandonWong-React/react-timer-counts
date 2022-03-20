import React, { useEffect } from 'react';
import './style.css';

function formatTime(value) {
  let string = '';
  string += Math.floor(value / 3600);
  value = value % 3600;
  string += ':';
  string +=
    Math.floor(value / 60) < 10
      ? `0${Math.floor(value / 60)}`
      : Math.floor(value / 60);
  string += ':';
  string += value % 60 < 10 ? `0${value % 60}` : value % 60;
  return string;
}

export default function TimerList({
  timer,
  onClickTimer,
  onRemoveTimer,
  setTimer,
  destroyTimer,
}) {
  useEffect(() => {
    if (timer.isPause) {
      destroyTimer();
    } else {
      setTimer();
    }
  }, [timer.isPause]);

  const onClickRemove = () => {
    destroyTimer();
    onRemoveTimer();
  };
  return (
    <div className="timer-wrapper">
      <div>{timer.title}</div>
      <div>{formatTime(timer.count)}</div>
      <button onClick={onClickTimer}>{timer.isPause ? 'Start' : 'Stop'}</button>
      <button onClick={onClickRemove}>Remove</button>
    </div>
  );
}
