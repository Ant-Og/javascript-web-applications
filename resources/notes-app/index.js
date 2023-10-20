const NotesModel = require('./notesModel');

console.log("The notes app is running");

const myNotes = new NotesModel();

console.log(myNotes.getNotes());