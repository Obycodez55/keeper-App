import React from "react";

import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import {createNote} from "./components/Note";
import notes from "./notes";


function App() {
  console.log(notes);
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;

