import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";

function Note({ id, title, content, update, remove }) {
  const [editNote, setEditNote] = useState(false);
  const [value, setValue] = useState("");

  function handleChange(evt) {
    setValue(evt.target.value);
    update(id, value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(id, value);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      {editNote && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <input type="text" placeholder={content} onChange={handleChange} />
          {/* <input type="text" value={content} onChange={handleChange} /> */}
        </form>
      )}
      <div>
        <button onClick={() => remove(id)}>
          <ClearIcon />
        </button>
        <button
          onClick={() => {
            setEditNote(!editNote);
          }}
        >
          <EditIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
