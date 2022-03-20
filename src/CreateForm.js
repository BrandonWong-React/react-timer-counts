import React, { useState } from 'react';
import './style.css';

export default function CreateForm({ onCreate, onCancel }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => inputValue.length > 0 && onCreate(inputValue)}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
