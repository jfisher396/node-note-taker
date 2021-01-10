const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, "\t");
  fs.writeFileSync("notes.json", `${dataJSON}`);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.black.bgGreen("Note removed!"));
  } else {
    console.log(chalk.black.bgRed("No note found."));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse(getNotes()));
  notes.forEach(note => console.log(chalk.blue(note.title)));
}

module.exports = {
  getNotes,
  addNote,
  saveNotes,
  loadNotes,
  removeNote,
  listNotes,
};
