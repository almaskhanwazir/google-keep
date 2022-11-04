import React, { Component } from "react";
import "./noteForm.scss";
import NotesFormFooter from "./NotesFormFooter"


class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const {
      setTitleFocused,
      formFieldBlur,
      autoGrow,
      setTextFocused,
      setShowInput,
      textAreaRef,
      titleValue,
      bgColor,
      resetForm,
      setTitleValue,
      textValue,
      setTextValue,
      setBgColor,
      showInput,
      chosenColor
    } = this.props;
    return (
      <div className="note-form"
      style={{
        background: bgColor,
      }}
      >
      {" "}
      { (showInput&&
        <div className="formGroup">
          <input
            type="text"
            name=""
            id=""
            className="title"
            placeholder="Title"
            value={titleValue}
            onFocus={() => setTitleFocused(true)}
            onBlur={() => {
              setTitleFocused(false);
              formFieldBlur();
            }}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <button
            className={"icon-pin-outline"}
            // onClick={() => setIsPinned(!isPinned)}
          />{" "}
        </div>
      )}{" "}
      <div className="formGroup">
        {" "}
        <textarea
          name=""
          id=""
          cols="30"
          rows="1"
          className="textArea"
          placeholder="Take a note..."
          value={textValue}
          onFocus={() => {
            setShowInput(true);
            setTextFocused(true);
            textAreaRef.current.focus();
          }}
          onInput={() => autoGrow(textAreaRef)}
          ref={textAreaRef}
          onBlur={() => {
            formFieldBlur();
            setTextFocused(false);
          }}
          onChange={(e) => setTextValue(e.target.value)}
        />
      </div>
      { showInput&&(
        <NotesFormFooter
          bgColor={bgColor}
          setBgColor={setBgColor}
          chosenColor={chosenColor}
          handleCloseClick={resetForm}
        />
      )}{" "}
    </div>
    );
  }
}

export default NoteForm;
