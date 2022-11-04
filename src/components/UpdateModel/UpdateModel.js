import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import "./updateModel.scss";
import NotesFormFooter from "../Note//NotesFormFooter"

class UpdateModel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const {
      onClose,
      setTitleFocused,
      formFieldBlur,
      updateFieldChange,
      autoGrow,
      note,
      setTextFocused,
      setShowInput,
      textAreaRef,
      setUBgColor,
      uBgColor
    } = this.props;
    return (
      <div 
      className="updateNodeForm"
      style={{
        background: note.bgColor,
      }}
      >
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onClose()}
          className="closeIcon"
        />
        <form className="noteInput" action="">
          <input
            type="text"
            name="title"
            id=""
            className="title"
            placeholder="Title"
            value={note.title}
            onFocus={() => setTitleFocused(true)}
            onBlur={() => {
              setTitleFocused(false);
              formFieldBlur(note.id);
            }}
            onChange={(e) => updateFieldChange(e)}
          />
          <textarea
            name="text"
            id=""
            cols="30"
            rows="1"
            className="textArea"
            placeholder="Take a note..."
            value={note.text}
            onFocus={() => {
              setShowInput(true);
              setTextFocused(true);
              textAreaRef.current.focus();
            }}
            onInput={() => autoGrow(textAreaRef)}
            ref={textAreaRef}
            onBlur={() => {
              formFieldBlur(note.id);
              setTextFocused(false);
            }}
            onChange={(e) => updateFieldChange(e)}
          />
        </form>
        <NotesFormFooter
          bgColor={uBgColor}
          setBgColor={setUBgColor}
          id={note.id}
        />
      </div>
    );
  }
}

export default UpdateModel;
