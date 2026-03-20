import React, { useEffect } from 'react';
import { getNextModeByKey } from '../../services/mode';
import { wrapChildrenWith } from '../../util/common';

const KeyStrokeHandler = ({ children, data, actions }) => {
  useEffect(() => {
    const handleKeyUp = (e) => {
      const { mode } = data;
      const nextMode = getNextModeByKey(mode, e.keyCode);

      if (nextMode !== mode) {
        e.preventDefault();
        actions.changeMode(nextMode);
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyUp);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyUp);
    };
  }, [data, actions]); // Re-run if data or actions change

  return <div>{wrapChildrenWith(children, { data, actions })}</div>;
};

export default KeyStrokeHandler;