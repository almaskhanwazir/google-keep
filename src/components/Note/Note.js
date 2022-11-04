import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./notes.scss";
const Note = ({ note, onDelete, ondblclick }) => {
  const [showMsg, setshowMsg] = useState(false);
  return (
    <div
      className="noteDiv"
      onDoubleClick={() => ondblclick(note)}
      style={{
        background: note.bgColor,
      }}
    >
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(note.id)}
        className="closeIcon"
        onMouseOver={() => setshowMsg(true)}
        onMouseLeave={() => setshowMsg(false)}
      />
      {showMsg && <span>Delete item</span>}
    </div>
  );
};

export default Note;
