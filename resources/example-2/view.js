class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}

module.exports = View;