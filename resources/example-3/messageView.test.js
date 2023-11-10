/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    // Arrange:
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act:
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test user message';
    buttonEl.click();

    // Assert:
    expect(document.querySelector('#message').textContent).toBe('Test user message');
  });

  it('empties the user input box', () => {
    // Arrange:
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act:
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test user message';
    buttonEl.click();

    // Assert:
    expect(document.querySelector('#message-input').value).toBe('');
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