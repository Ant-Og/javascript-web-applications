const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log("The notes app is running");

// Create a new instance of NotesModel and call the addNote method to create an array of notes.
const notesModel = new NotesModel();

notesModel.addNote('Interview prep notes.');
notesModel.addNote('Software project notes');
notesModel.addNote('Passion project notes');
notesModel.addNote('Workout notes');

// Dependency-inject the previously created instance of NotesModel into a new NotesView instance.  
const notesView = new NotesView(notesModel);
notesView.displayNotes();

console.log(notesModel.getNotes())