import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

function NotesFormFooter({
  bgColor,
  setBgColor,
  children,
  id
}) {
  return (
    <div style={{ cursor: 'default' }} className="formToolsGroup formGroup" >
      <ColorPicker id={id} chosenColor={bgColor} setBgColor={setBgColor} />
      {children}
    </div>
  );
}

export default NotesFormFooter;
