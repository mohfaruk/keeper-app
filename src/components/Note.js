import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function Note({ id, title, content, remove }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => remove(id)}>
        <ClearIcon />
      </button>
    </div>
  );
}

export default Note;
