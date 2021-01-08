const fs = require("fs");

const getNotes = function () {
  return "Your notes here";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes, null, "\t");
  fs.writeFileSync("notes.json", `${dataJSON}`);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });
  saveNotes(notesToKeep)
}

module.exports = {
  getNotes,
  addNote,
  saveNotes,
  loadNotes,
  removeNote
};
