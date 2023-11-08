class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const messageDivEl = document.createElement('div');
    messageDivEl.id = 'message';
    messageDivEl.innerText = 'This message is displayed by javascript';
    document.querySelector('#main-container').append(messageDivEl);
    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;