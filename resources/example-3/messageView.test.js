/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('deletes the message', () => {
    // Arrange:
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act: Show and then hide message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Assert: that the message element is not on the page
    expect(document.querySelector('#message')).toBeNull();
  });
});