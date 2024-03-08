export default class EntropiaLeaksModule {
  constructor(config) {
    this.config = config;
    this.domElement = document.querySelector(this.config.querySelector);

    const headline = document.createElement('h2');
    headline.innerText = '#' + this.config.apiParameters.hashtag;
    this.domElement.replaceChildren(headline);

    setInterval(() => this.update(), this.config.updateInterval);
    this.update();
  }

  update() {
    this.fetchData()
      .then((response) => {
        Array.from(this.domElement.childNodes).reverse().forEach((child) => {
          if (!child.dataset.id) {
            return;
          }

          if (!Array.from(response).some((tootValue) => child.dataset.id === tootValue?.id)) {
            this.domElement.removeChild(child);
          }
        });

        Object.values(response)?.reverse()?.forEach((tootValue) => {
          if (Array.from(this.domElement.childNodes).some((child) => child.dataset.id === tootValue?.id)) {
            return;
          }

          const tootContent = document.createElement('p');
          tootContent.innerText = this.stripHtmlTags(tootValue?.content);

          const tootCite = document.createElement('cite');
          tootCite.innerText = tootValue?.account?.acct;

          if (!tootCite.innerText.includes('@')) {
            tootCite.innerText += '@chaos.social';
          }

          const toot = document.createElement('blockquote');
          toot.dataset.id = tootValue?.id;
          toot.appendChild(tootContent);
          toot.appendChild(tootCite);

          const firstExistingTootChild = this.domElement.querySelector('blockquote');

          if (!firstExistingTootChild) {
            this.domElement.appendChild(toot);
          }
          else {
            this.domElement.insertBefore(toot, firstExistingTootChild);
          }
        });
      });
  }

  async fetchData() {
    const response = await fetch(`api.php?${new URLSearchParams(this.config.apiParameters)}`);
    return response.json();
  }

  stripHtmlTags(string) {
    const fakeHtmlTag = document.createElement('p');
    fakeHtmlTag.innerHTML = string;

    return fakeHtmlTag.textContent ?? fakeHtmlTag.innerText ?? '';
  }
}
