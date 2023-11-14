class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.repoInfo = repoData;
        this.model.setRepoInfo(this.repoInfo);
        this.display();
      });
    });
  }

  display() {
    // Store HTML elements in variables
    const repoName = document.querySelector('#repo-name');
    const repoDescription = document.querySelector('#repo-description');
    const repoImage = document.querySelector('#repo-image')
    
    // Append stored repo info to each HTML element
    repoName.append(this.model.getRepoInfo().full_name);
    repoDescription.append(this.model.getRepoInfo().description);
    repoImage.src = this.model.getRepoInfo().owner.avatar_url;
  }
}

module.exports = GithubView;