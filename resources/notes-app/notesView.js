class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;

    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');
    
    this.buttonEl.addEventListener('click', () => {
      const noteOnClick = document.querySelector('#note-input').value;
      this.addNoteOnClick(noteOnClick);
    });
  }

  addNoteOnClick(noteOnClick) {
    // Add a new note to the existing array of notes
    this.notesModel.addNote(noteOnClick);
    
    // Call displayNotes methods to display all notes
    this.displayNotes();

    // Empty message input element's value attribute after receiving user message input
    document.querySelector('#note-input').value = '';
  }

  displayNotes() {
    // Remove note from page
    this.removeNotes();

    // Store array of notes in a variable
    const allNotes = this.notesModel.getNotes();
    
    // A for loop that iterates through the notes array and appends a new div element to the main-container for each note element. 
    allNotes.forEach((note) => {
      let noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.innerHTML = note;
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    this.notesClient.loadNotes((returnedNotesFromApi) => {
      this.notesModel.setNotes(returnedNotesFromApi);
      this.displayNotes();
    });
  }

  removeNotes() {
    // Remove all note elements previously on the page
    const notesToRemove = document.querySelectorAll('div.note');
    notesToRemove.forEach((note) => {
      note.remove();
    });
  }
}

module.exports = NotesView;