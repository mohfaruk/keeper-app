import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";

function Note({ id, title, content, update, remove }) {
  const [value, setValue] = useState("");

  function handleChange(evt) {
    setValue(evt.target.value);
    update(id, evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    update(id, value);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <textarea
          rows="4"
          type="text"
          defaultValue={content}
          onChange={handleChange}
        />
      </form>
      <div>
        <button onClick={() => remove(id)}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
