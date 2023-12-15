/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const JestFetchMock = require('jest-fetch-mock')
JestFetchMock.enableMocks();

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");
jest.mock("./notesClient.js");

describe("Notes view", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("the div note element has the className 'note'", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    // Act
    model.addNote("First note");
    view.displayNotes();
    
    // Assert
    expect(document.querySelector("#main-container").children[0].className).toEqual("note");
  });

  it("displays no notes initially", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    // Act
    view.displayNotes();

    // Assert
    expect(document.querySelectorAll("div.note").length).toBe(0);
  });
  
  it("displays one note on the HTML page after one note is created", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    // Act
    model.addNote("First note");
    view.displayNotes();

    // Assert
    expect(document.querySelectorAll("div.note").length).toBe(1);
  });

  it("displays two notes on the HTML page after two notes are created", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    // Act
    model.addNote("First note");
    model.addNote("Second note");
    view.displayNotes();
    
    // Assert
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  xit("empties the user input box after an entry is made", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector("#add-note-button");
    const inputEl = document.querySelector("#note-input");
  
    // Act
    inputEl.value = "This is an example note";
    buttonEl.click();
    
    // Assert
    expect(document.querySelector("#note-input").value).toBe("");
  });

  xit("removes all elements with a 'note' className on click and returns updated list", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector("#add-note-button");
    const inputEl = document.querySelector("#note-input");
    
    // Act
    inputEl.value = "This is an example note";
    buttonEl.click();
    inputEl.value = "This is a second example note";
    buttonEl.click();

    // Assert
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  it("calls the loadNotes method, sets the received data on the model and then displays the notes data", (done) => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model, client);
    
    // Act
    client.loadNotes.mockImplementation((callback) => {
      callback(["Example note 1", "Example note 2"]);
    });
    
    view.displayNotesFromApi();
    
    // Assert
    expect(document.querySelectorAll("div.note").length).toBe(2);
    expect(model.getNotes()).toEqual(["Example note 1", "Example note 2"]);
    done();
  });

  it("calls the client.createNote method when the user submits the form", (done) => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = {
      createNote: jest.fn(),
    };

    const model = new NotesModel();

    // Act
    mockClient.createNote.mockResolvedValueOnce("name");  
    
    const view = new NotesView(model, mockClient);

    // Assert
    view.addNoteOnClick("name").then(() => {
      expect(mockClient.createNote).toHaveBeenCalledWith("name");
    });
    done();
  });

  it("appends an error message on the page", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model, client); 

   // Act
    const error = "SomeError: Failed to fetch";
    view.displayError(error);

    // Assert
    expect(document.querySelectorAll("div.error").length).toBe(1);
    expect(document.querySelector("div.error").innerHTML).toBe("SomeError: Failed to fetch");
  });
});