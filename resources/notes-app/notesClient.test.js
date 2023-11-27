const NotesClient = require("./notesClient");
require("jest-fetch-mock").enableFetchMocks();

describe("NotesClient class", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls fetch and loads note list info", (done) => {
    const client = new NotesClient();
    
    fetch.mockResponseOnce(JSON.stringify({
      note: "this is a test note"
    }));

    client.loadNotes((returnedNotesFromApi) => {
      expect(returnedNotesFromApi.note).toBe("this is a test note");
    });
    done();
  });

  it("sends a POST request to the notes backend to create a new note", (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({ content: "This is also a test note" }));

    client.createNote("postedNote").then((response) => {
      expect(response.content).toEqual("This is also a test note")
    });

    expect(fetch.mock.calls.length).toEqual(1);

    done();
  })
});