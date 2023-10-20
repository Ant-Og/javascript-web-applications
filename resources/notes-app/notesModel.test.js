const NotesModel = require('./notesModel');

describe('notesMode', () => {
  it('returns a list of all notes in an array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('adds two notes to notes list', () => {
    const model = new NotesModel();

    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the notes list and returns an empty array', () => {
    const model = new NotesModel();

    model.addNote('Buy milk');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});