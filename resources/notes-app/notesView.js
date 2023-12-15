class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;

    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-button');
    this.noteInputEl = document.querySelector('#note-input');
    
    this.addNoteButtonEl.addEventListener('click', () => {
      const noteOnClick = this.noteInputEl.value;
      this.addNoteOnClick(noteOnClick);
      this.displayNotesFromApi(); // Call displayNotes methods to display all notes
      this.noteInputEl.value = ''; // Empty message input element's value attribute after receiving user message input
    });
  }

  addNoteOnClick(noteOnClick) {
    return this.notesClient.createNote(noteOnClick) // Add a new note to the existing array of notes
  }

  displayNotes() {
    this.removeNotes(); // Remove note from page
    const allNotes = this.notesModel.getNotes(); // Store array of notes in a variable
    
    // A for loop that iterates through the notes array and appends a new div element to the main-container for each note element. 
    allNotes.forEach((note) => {
      let noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.innerHTML = note;
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    // If no error is produced, loadNotes passes fetched data to first callback function, otherwise loadNotes passes on error data to second callback function.
    this.notesClient.loadNotes((returnedNotesFromApi) => {
      this.notesModel.setNotes(returnedNotesFromApi);
      this.displayNotes();
    },
    (error) => this.displayError(error)
    );
  }

  displayError(errorMessage) {
    this.removeErrors(); // remove errors
    let errorMessageEl = document.createElement('div');
    errorMessageEl.className = 'error';
    errorMessageEl.innerHTML = errorMessage;
    this.mainContainerEl.append(errorMessageEl);
  }

  removeNotes() {
    // Remove all note elements previously on the page
    const notesToRemove = document.querySelectorAll('div.note');
    notesToRemove.forEach((note) => {
      note.remove();
    });
  }

  removeErrors() {
    const errorsToRemove = document.querySelectorAll('div.error');
    errorsToRemove.forEach((error) => {
      error.remove();
    });
  }
}

module.exports = NotesView;