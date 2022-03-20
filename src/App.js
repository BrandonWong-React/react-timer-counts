import React, { useState } from 'react';
import CreateForm from './CreateForm';
import TimerList from './TimerList';
import './style.css';

export default function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [timerList, setTimerList] = useState([]);
  const onCreateTimer = (value) => {
    stopAllTimers();
    const tmpList = Object.assign(timerList, []);
    tmpList.push({ title: value, count: 0, isPause: true, countTimer: null });
    setTimerList(timerList);
    setShowCreateForm(false);
    refreshAllTimers();
  };
  const onCancelTimer = () => {
    setShowCreateForm(false);
  };
  const onClickCreate = () => {
    setShowCreateForm(true);
  };
  const onClickTimer = (index) => {
    const tmpList = [...timerList];
    tmpList[index].isPause = !tmpList[index].isPause;
    setTimerList(tmpList);
  };
  const onRemoveTimer = (index) => {
    stopAllTimers();
    const tmpList = [...timerList];
    tmpList.splice(index, 1);
    setTimerList(tmpList);
    refreshAllTimers();
  };
  const increaseCount = (index) => {
    const tmpList = [...timerList];
    tmpList[index].count++;
    setTimerList(tmpList);
  };

  const stopAllTimers = () => {
    const tmpList = [...timerList];
    for (let i = 0; i < tmpList.length; i++) {
      if (!tmpList[i].isPause) {
        destroyTimer(i);
      }
    }
  };

  const refreshAllTimers = () => {
    const tmpList = [...timerList];
    for (let i = 0; i < tmpList.length; i++) {
      if (!tmpList[i].isPause) {
        setTimer(i);
      }
    }
  };

  const setTimer = (index) => {
    const tmpList = [...timerList];
    if (!tmpList[index].countTimer) {
      tmpList[index].countTimer = setInterval(() => increaseCount(index), 1000);
    }
    setTimerList(tmpList);
  };
  const destroyTimer = (index) => {
    const tmpList = [...timerList];
    if (tmpList[index].countTimer) {
      clearInterval(tmpList[index].countTimer);
      tmpList[index].countTimer = null;
    }
    setTimerList(tmpList);
  };

  return (
    <div>
      {showCreateForm ? (
        <CreateForm onCreate={onCreateTimer} onCancel={onCancelTimer} />
      ) : (
        <TimerList
          timerList={timerList}
          onClickButton={onClickCreate}
          onClickTimer={onClickTimer}
          onRemoveTimer={onRemoveTimer}
          setTimer={setTimer}
          destroyTimer={destroyTimer}
        />
      )}
    </div>
  );
}
