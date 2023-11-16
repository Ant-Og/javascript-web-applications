// On the notes app web page, open the developer console 
// and use fetch to make a call to http://localhost:3000/notes and console.log

// Step 1
const result = 'http://localhost:3000/notes'

// Step 2
fetch('http://localhost:3000/notes')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
