const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableFetchMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads note list info', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
      0: "this is a test note"
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi[0]).toBe("this is a test note");

      done();
    });
  });
});