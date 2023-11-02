class NotesView {
  constructor (notesModel) {
    this.notesModel = notesModel
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes () {
    const allNotes = this.notesModel.getNotes();

    // A for loop that iterates through the notes array and appends a new div element to the main-container for each note element. 
    allNotes.forEach((note) => {
      let noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = note;
      this.mainContainerEl.append(noteEl);        
    });
  }
}

module.exports = NotesView;