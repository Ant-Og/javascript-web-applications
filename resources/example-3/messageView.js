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
    const messageDivEl = document.createElement('div');
    messageDivEl.id = 'message';
    messageDivEl.innerText = 'This message is displayed by javascript';
    document.querySelector('#main-container').append(messageDivEl);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const elementToRemove = document.querySelector('#message');
    elementToRemove.remove(); 
  }
}
module.exports = MessageView;