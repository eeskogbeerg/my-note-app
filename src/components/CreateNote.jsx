import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Add a title to your note"
          
        /> 
        )}


        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Add a description to your note"
          rows= {isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
            <NoteAddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
