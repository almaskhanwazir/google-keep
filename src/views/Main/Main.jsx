import React, { useRef, useState, useEffect } from "react";
import Note from "../../components/Note/Note";
import UpdateModel from "../../components/UpdateModel/UpdateModel";
import NoteForm from "../../components/Note/NoteForm";
import Modal from "../../components/Modal/Modal";
import "./main.scss";
import {  getAllNotes,addNote,updateNote,DeleteNote} from '../../Services/apiCalls';

const Main = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [uBgColor, setUBgColor] = useState(false);
  const [titleFocused, setTitleFocused] = useState(false);
  const [onUpdate, setOnUpdate] = useState(false);
  const [cNote, setCurrentNote] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  // Fetch Tasks
  const fetchNotes = async () => {
    getAllNotes()
    .then(res=>{
      if (res !== 0) {
        setNotes(res);
      }
    })
  };
  // Add Task
  const addNotes = async (notesItem) => {
    addNote(notesItem)
    .then(res=>{
      setNotes([...notes, notesItem]);
    setShowInput(false);
    setTitleValue("");
    setBgColor("")
    setTextValue("");
           
    })
    
  };

  // Delete Task
  const delNote = async (id) => {
    DeleteNote(id)
    .then(res=>{
      setNotes(notes.filter((note) => note.id !== id))
        });
  };
  const UpdateNote = async (id) => {
    updateNote(cNote)
    .then(res=>{
       if(res.success){
        setNotes(
          notes.map((note) =>
            note.id === id ? { ...note, title: cNote.title, text: cNote.text, bgColor:cNote.bgColor } : note
          )
        );

       }})
  };
  const formFieldBlur = (id) => {
    if (onUpdate) {
      UpdateNote(id);
    } else {
      if (titleValue && textValue) {
        addNotes({ title: titleValue, text: textValue, bgColor: bgColor });
      }
    }
  };
  const [isModal, setisModal] = useState(false);
  const textAreaRef = useRef(null);
  const textAreaRef2 = useRef(null);

  const dblClick = (cNote) => {
    setCurrentNote(cNote);
    setOnUpdate(true);
  };
  const closeUpdateModel = (cNote) => {
    setCurrentNote([]);
    setOnUpdate(false);
  };
  const updateFieldChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({
      ...cNote,
      [name]: value,
    });
  };
  const updateFormChange = async  (color,id) => {
    cNote.bgColor=color;
    updateNote(cNote)
    .then(res=>{
       if(res.success){
        setUBgColor(color);
        setNotes(
          notes.map((note) =>
            note.id === id ? { ...note, title: cNote.title, text: cNote.text, bgColor:cNote.bgColor } : note
          )
        );

       }})
  };

  const autoGrow = (elem) => {
    elem.current.style.height = "5px";
    elem.current.style.height = 10 + elem.current.scrollHeight + "px";
  };
  const openModal = () => {
    setisModal(true);
    console.log("open");
  };
  return (
    <main className="mainCss">
      {onUpdate && (
        <UpdateModel
          setTitleFocused={setTitleFocused}
          updateFieldChange={updateFieldChange}
          formFieldBlur={formFieldBlur}
          note={cNote}
          onClose={closeUpdateModel}
          setTextFocused={setTextFocused}
          setShowInput={setShowInput}
          textAreaRef={textAreaRef2}
          autoGrow={autoGrow}
          setUBgColor={updateFormChange}
          uBgColor={uBgColor}
        />
      )}
      <NoteForm
        setTitleFocused={setTitleFocused}
        updateFieldChange={updateFieldChange}
        formFieldBlur={formFieldBlur}
        note={cNote}
        onClose={closeUpdateModel}
        setTextFocused={setTextFocused}
        setShowInput={setShowInput}
        textAreaRef={textAreaRef}
        titleValue={titleValue}
        bgColor={bgColor}
        setTextValue={setTextValue}
        setTitleValue={setTitleValue}
        setBgColor={setBgColor}
        textValue={textValue}
        autoGrow={autoGrow}
        chosenColor={bgColor}
        showInput={showInput}
      />

      <div className="noteCon">
        {notes.length>0 &&
          notes.map((note, index) => (
            <Note
              onDelete={delNote}
              note={note}
              ondblclick={dblClick}
              key={index}
              onClick={() => openModal}
            />
          ))}
      </div>

      {isModal ? <Modal /> : ""}
    </main>
  );
};

export default Main;
