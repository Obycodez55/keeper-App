import React from "react";

function Note({ title, content }) {
  return (<div className="note">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>)
}

const createNote = note => {
  return <Note key={note.key} title={note.title} content={note.content} />;
};

export default Note;
export { createNote };
