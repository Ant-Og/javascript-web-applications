/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  
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

  it("saves the users input when the add note button is clicked", () => {
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
    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toBe("This is an example note");
  });

  it("empties the user input box after an entry is made", () => {
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
});