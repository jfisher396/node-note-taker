const fs = require("fs");
const chalk = require("chalk");

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
    console.log(chalk.black.bgGreen("New note added"));
  } else {
    console.log(chalk.black.bgYellow("Note title taken!"));
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
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.black.bgGreen("Note removed!"));
  } else {
    console.log(chalk.black.bgRed("No note found."));
  }
};

module.exports = {
  addNote,
  saveNotes,
  loadNotes,
  removeNote,
};
