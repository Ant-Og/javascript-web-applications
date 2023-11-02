/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  
  it("the div note element has class name 'note'", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote("First note");

    notesView.displayNotes();

    expect(document.querySelector("#main-container").children[0].className).toEqual('note');
  });
  
  it("Displays one notes on the HTML page after one note is created", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote("First note");

    notesView.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
  });

  it("Displays two notes on the HTML page after two notes are created", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote("First note");
    notesModel.addNote("Second note");

    notesView.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});