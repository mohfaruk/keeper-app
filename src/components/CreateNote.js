import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateNote({ add }) {
  const [select, setSelect] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    add(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Add Note..."
          value={note.title}
          onClick={() => setSelect(true)}
          onChange={handleChange}
        />
        {select && (
          <textarea
            name="content"
            placeholder={select ? "What's on your mind..." : ""}
            rows={select ? 3 : 1}
            value={note.content}
            onChange={handleChange}
          />
        )}
        <Zoom in={select}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
