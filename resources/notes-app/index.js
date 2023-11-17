const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

console.log("The notes app is running");

// Create a NotesModel instance.
const notesModel = new NotesModel();
// Create a NotesClient innstance.
const notesClient = new NotesClient();
// Dependency-inject the previously created NotesModel & NotesClient instances into a NotesView instance.  
const notesView = new NotesView(notesModel, notesClient);

notesView.displayNotesFromApi();