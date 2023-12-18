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
      this.noteInputEl.value = null; // Empties message input element's value attribute after receiving user message input.
    });
  }

  async addNoteOnClick(noteOnClick) {
    await this.notesClient.createNote(noteOnClick) // Adds a new note to the existing array of notes.
    this.displayNotesFromApi();
  }

  displayNotes() {
    this.removeNotes(); 
    const allNotes = this.notesModel.getNotes(); // Stores array of notes in a variable.
    
    allNotes.forEach((note) => {
      // A for loop that iterates through the notes array and appends a new div element to the main-container for each note element.
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
    }
    ,
    (error) => this.displayError(error) // Error handler if GET endpoint fails.
    );
  }

  displayError(errorMessage) {
    // Produces error message on screen.
    this.removeErrors();
    let errorMessageEl = document.createElement('div');
    errorMessageEl.className = 'error';
    errorMessageEl.innerHTML = errorMessage;
    this.mainContainerEl.append(errorMessageEl);
  }

  removeNotes() {
    // Removes all note elements previously on the page.
    const notesToRemove = document.querySelectorAll('div.note');
    notesToRemove.forEach((note) => {
      note.remove();
    });
  }

  removeErrors() {
    // Removes error messages from screen.
    const errorsToRemove = document.querySelectorAll('div.error');
    errorsToRemove.forEach((error) => {
      error.remove();
    });
  }
}

module.exports = NotesView;