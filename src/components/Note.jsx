import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div className="note"
        onClick={
            () => {
                props.onDel(props.id);
            }
        }>
      <h1>{props.listedNote.title}</h1>
      <p>{props.listedNote.content}</p>
      <button><DeleteIcon /></button>
    </div>
  );
}

export default Note;
