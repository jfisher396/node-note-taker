const fs = require("fs");

const getNotes = function () {
  return "Your notes here";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
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

module.exports = {
  getNotes,
  addNote,
  saveNotes,
  loadNotes
};
