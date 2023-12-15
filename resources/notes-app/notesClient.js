class NotesClient {
  loadNotes(callback, errorHandler) {
    return fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => errorHandler(`Oops, something went wrong! ${error}`));
    }
  
  createNote(note) {
    return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: note }),
    })
      .then((response) => response.json())
  }

// Async/await version

  // async loadNotes(callback) {
  //   const response = await fetch("http://localhost:3000/notes");

  //   const result = await response.json();
  //   console.log("Success:", result);
  //   const notes = await callback(result);
  //   return notes
  // }

  // async createNote(note) {
  //   const response = await fetch("http://localhost:3000/notes", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ content: note }),
  //   });
    
  //   const result = await response.json();
  //   console.log("Success:", result);
  //   return result
  // }
}

module.exports = NotesClient;