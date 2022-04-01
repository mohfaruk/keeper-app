import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";

function Note({ id, title, content, update, remove }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => remove(id)}>
        <ClearIcon />
      </button>
      <button onClick={() => update(id)}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
