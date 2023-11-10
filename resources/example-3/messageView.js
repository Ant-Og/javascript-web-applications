class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    // Store message input element into a variable
    const userMessage = document.querySelector('#message-input').value
    
    // Create a user message div element
    const messageDivEl = document.createElement('div');
  
    // Set user message div element ID and text content
    messageDivEl.id = 'message';
    messageDivEl.textContent = userMessage;

    // Append user message div element to the main container element
    document.querySelector('#main-container').append(messageDivEl);
    
    // empty message input element's value attribute after receiving user message input
    console.log(document.querySelector('#message-input').value);
    document.querySelector('#message-input').value = '';
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}
module.exports = MessageView;