import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';



function NewNote(props) {
    const curDate = new Date();
    const date = `${curDate.getDate()}/${curDate.getMonth()+1}/${curDate.getFullYear()}`;
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
       
        
        <small>{date}</small>
        

      <Fab onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default NewNote;
