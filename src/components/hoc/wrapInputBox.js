import { useState } from 'react';
import KeyCode from 'keycode-js';

export const useTodoInput = (props) => {
  const [value, setValue] = useState(props.value || '');

  const handleKeyUp = (e) => {
    const text = e.target.value.trim();
    if (e.keyCode === KeyCode.KEY_RETURN && text) {
      props.addNew(text);
      setValue('');
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, handleChange, handleKeyUp };
};