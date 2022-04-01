import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

export default function App() {
  const [items, setItems] = useState([]);

  function addNote(note) {
    setItems(prevValue => {
      return [...prevValue, note];
    });
  }

  function updateTask(index) {
    const newTasks = [...items];
    const task = newTasks[index];
    const updateTask = prompt(`Update "${task.title}" note?`, task.content);
    const newItem = { title: task.title, content: updateTask };
    newTasks.splice(index, 1, newItem);

    if (updateTask === "" || updateTask === null) {
      return;
    } else {
      setItems(newTasks);
    }
  }

  function removeNote(id) {
    setItems(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote add={addNote} />{" "}
      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          update={updateTask}
          // edit={editTask}
          remove={removeNote}
        />
      ))}{" "}
      <Footer />
    </div>
  );
}
