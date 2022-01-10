const fs = require("fs");

const getNotes = () => {
  return "your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const dupNotes = notes.find((n) => n.title === title);

  if (!dupNotes) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
  } else {
    console.log("title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removeNoteTitle = notes.filter((n) => n.title !== title);

  if (notes.length > removeNoteTitle.length) {
    saveNotes(removeNoteTitle);
    console.log("note removed");
  } else {
    console.log("no matching title");
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log("Your notes...");
  notes.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);

  foundNote
    ? console.log(foundNote.title, foundNote.body)
    : console.log("no note found");
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
